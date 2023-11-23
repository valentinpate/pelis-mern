import { useState } from 'react';
import './sketch.css'
import NavBar from './NavBar';
import Header from './Header';

function Hero({newArray}){
    let [num, setNum]=useState(1)

    const changeMovie=(event)=>
        {
            const number =Number(event.target.textContent) 
        setNum(number)
        console.log(num)
       }

    const background = {
        backgroundImage: newArray.length>0?`linear-gradient(to bottom, transparent 0%, #000000 97%), url(${newArray[num-1].primaryImage.url})`:null,
        backgroundSize:'cover',
        backgroundPosition:'center'
    };
    
  return (
    <>
    { newArray.length>0?
            <>
            <section style={background}>
                <Header></Header>
                <section class="hero position-relative px-5">
                
                    <div class="hero-movie">
                        <div class="hero-description d-flex align-items-center position-absolute">
                            <button class="btn px-4 colorButton ms-2">Book Now</button>
                            <p>January 29, 2018 <br /> IMAX 3D</p> 
                        </div>
                        <div class="hero-trailer position-absolute">
                            <button class="btn-trailer"><i class="bi bi-play-fill"></i></button>
                            <p>Watch Trailer</p>
                        </div>
                    </div>
                    <div class="hero-content">
                        <div class="social-media position-absolute">
                            <a href="#facebook"><i class="bi bi-facebook"></i></a>
                            <a href="#twitter"><i class="bi bi-twitter-x"></i></a>
                            <a href="#instagram"><i class="bi bi-instagram"></i></a>
                        </div> 
                        <div class="hero-slide d-flex position-absolute">
                            <button><i class="bi bi-arrow-left"></i></button>
                            <div class="hero-slide-page d-flex">
                            {
                                
                                newArray.map((item,index)=>
                                <>

                                    <p id={index} onClick={changeMovie}><a class="page-link" href="#" >{index<=8?"0"+(index+1):index+1} </a></p>

                                </>
                                )
                                
                            
                            }
                            </div>
                            <button><i class="bi bi-arrow-right"></i></button>
                        </div>
                    </div>
                </section>
            </section>
            </>
         
       
          : <p>Not Found!</p>
       }
    </>
  );
}

export default Hero;