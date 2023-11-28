import './sketch.css'
import Hero from './Hero';
import News from './News';
import Footer from './Footer'
import Estrenos from './Estrenos';
function Home({newArray,setIdTrailer,trailer,setTrailer}){
  
  return (
    <>
        <Hero newArray={newArray} trailer={trailer} setTrailer={setTrailer} setIdTrailer={setIdTrailer}></Hero>
        <Estrenos></Estrenos>
        <News></News>
        <Footer></Footer>
    </>
  );
}

export default Home;