import './sketch.css'
import Hero from './Hero';
import Footer from './Footer'

function Home({newArray,setIdTrailer,trailer,setTrailer}){
  
  return (
    <>
        <Hero newArray={newArray} trailer={trailer} setTrailer={setTrailer} setIdTrailer={setIdTrailer}></Hero>
        <Footer></Footer>
    </>
  );
}

export default Home;