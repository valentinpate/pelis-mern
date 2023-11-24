import { useEffect, useState } from 'react';
import './sketch.css'
import Header from './Header';

let key = true;

function Hero({newArray}){
    let [num, setNum]=useState(1)
    let array = [0,1,2,3,4,5]
    let [hover, setHover] = useState(true)

    const changeMovie=async (event)=>
        {
        key = false
        const number =Number(event.target.textContent) 
        setNum(number)
    };

    const slide = async()=>{
        if(num == array[num]){
            await new Promise(resolve => setTimeout(resolve, 10000));

            if(key){
                setNum(num+1)
            }
        
        }
    }; slide()
        
    const changeMovieMinus = ()=>{
        key = false
        if(num != 1){
            setNum(num-1)
            console.log(num)
        }  
    };

    const changeMoviePlus = ()=>{
        key = false
        if (num != 6){
            setNum(num+1)
            console.log(num)
        }  
    };

    const handleHover = ()=>{
        setHover(false)
    };

    const handleUnhover = ()=>{
       setHover(true)
    };

    const background = {
        backgroundImage: newArray.length>0?`linear-gradient(to bottom, transparent 0%, #000000 95%),url(${newArray[num-1].primaryImage.url}) `:null,
        backgroundSize:'cover',
        backgroundPosition:'center'
    };

    const hoverAuto ={//hover para slide
        fontSize:"2rem",
        color:"var(--red)",
        marginTop:"0.2em"
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
                            <button onClick={changeMovieMinus}><i class="bi bi-arrow-left"></i></button>
                            <div class="hero-slide-page d-flex">
                                
                            {
                                
                                newArray.map((item,index)=>
                                <>
                                    {index<=5?
                                     <p onMouseEnter={handleHover}
                                        onMouseLeave={handleUnhover}
                                        style={num == index+1 && hover ?hoverAuto:null} 
                                        id={index} 
                                        onClick={changeMovie} 
                                        key={index}><a class="page-link" href="#" >{index<=5?"0"+(index+1):null} </a></p>:null

                                    }
                                   

                                </>
                                )
                                
                            
                            }
                            </div>
                            <button onClick={changeMoviePlus} ><i class="bi bi-arrow-right"></i></button>
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