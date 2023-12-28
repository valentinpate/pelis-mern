import '../../sketch.css'
import Hero from './Hero';
import Footer from '../../components/Footer'
import Estrenos from './Estrenos';
import ProxEstrenos from './ProxEstrenos';

function Home({ dataSlide }){
  
  return (
    <>
       
        <Hero dataSlide={dataSlide} ></Hero>
        <Estrenos></Estrenos>
        <ProxEstrenos></ProxEstrenos>
        <Footer></Footer>
    </>
  );
}

export default Home