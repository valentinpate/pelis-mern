import axios from 'axios';
import { useContext , useEffect} from 'react';
import { UserContext } from './UserContext';
import NavBar from './NavBar';
import './sketch.css'
import {NavLink, Link, useNavigate} from "react-router-dom"

function Header(){
  const {user , setUser} = useContext(UserContext)
  const navigate = useNavigate()
   // Al cargar el componente, verificamos si la información del usuario está en localStorage
   useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Cuando el usuario cambia, lo guardamos en localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const LogOut = async () => {
    localStorage.removeItem('user')
    const data = await axios.request({method:"GET",url:"http://localhost:3001/logout"})
    console.log(data)
    navigate("/")
  }

  return (
    <>
    <header class="d-flex justify-content-between py-4 px-5">
            <img src="/logo.png" alt="Movies Hub" class="logo"/>
            <div class="header-content d-flex justify-content-evenly align-items-center">
             <NavBar></NavBar>
                <a href="#search"><button class="btn-search"><i class="bi bi-search px-5"></i></button></a>
                { user ?(
                  <div className='dropdown'>
                    <button className='btn px-4 colorButton ms-2 dropdown-toggle' type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{user.name}</button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a className="dropdown-item" onClick={LogOut}>Logout</a>
                     </div>
                  </div>
                ) : ( <NavLink to="/signin"><button class="btn px-4 colorButton ms-2">Sign in</button></NavLink>
                )} 
            </div>
        </header>
  
    </>
  );
}

export default Header;