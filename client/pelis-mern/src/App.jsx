import axios from 'axios';
import { useEffect, useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { UserContext } from './UserContext';
import NoPage from './NoPage';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';
import Movie from './Movie';
import Search from './Search';


function App() {
const [dataSlide, setDataSlide] = useState([]);
const [user, setUser] = useState(null);
const [busqueda,setBusqueda]=useState("")
const linkStyle = {
  textDecoration:"none"
}

  useEffect(()=>{ //useEffect para el llamado de la API
      async function llamadoHero(){
        axios.get('http://localhost:3001/',{ withCredentials: true })
        .then(response => setDataSlide(response.data.arraySlide))
        .catch(error => console.error('Error al obtener datos:', error));
        }llamadoHero();
      },[]) 

  return (
    <>
    <UserContext.Provider value={{user, setUser, busqueda, setBusqueda, linkStyle}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home dataSlide={dataSlide}/>}></Route>
          <Route path="*" element={<NoPage/>}></Route>
          <Route path="/signin" element={<SignIn/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/search" element={<Search/>}></Route>
          <Route path="/movie/:id" element={<Movie/>}></Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
    </>
  );
}

export default App;