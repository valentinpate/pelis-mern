import './sketch.css'
import Hero from './Hero';
import News from './News';
import Footer from './Footer'
function Home({newArray,setIdTrailer,trailer,setTrailer}){
  
  return (
    <>
        <Hero newArray={newArray} trailer={trailer} setTrailer={setTrailer} setIdTrailer={setIdTrailer}></Hero>
        <News></News>
        <Footer></Footer>
    </>
  );
}

export default Home;