import './sketch.css'
import Hero from './Hero';
import News from './News';
import Footer from './Footer'
import Prueba from './Prueba'
function Home({newArray,setIdTrailer,trailer,setTrailer}){
  
  return (
    <>
        <Hero newArray={newArray} trailer={trailer} setTrailer={setTrailer} setIdTrailer={setIdTrailer}></Hero>
        <News></News>
        <Prueba></Prueba>
        <Footer></Footer>
    </>
  );
}

export default Home;