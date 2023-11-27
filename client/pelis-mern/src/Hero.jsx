import { useEffect, useState } from 'react';
import React from 'react';
import './sketch.css'
import Header from './Header';

let key = true;
function Hero({newArray,setIdTrailer,trailer,setTrailer}){
    let [num, setNum]=useState(1)
    let array = [0,1,2,3,4,5]
    let [hover, setHover] = useState(true)
    let [viewTrailer,setViewTrailer]=useState(false)
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];

    const changeMovie=async (event)=>//cambio de numero: setNum es la más importante!! renderiza todo lo que contenga el valor del index elegido
        {
        key = false
        const number =Number(event.target.textContent) 
        setNum(number)
        setViewTrailer(false)
    };

    const slide = async()=>{//slide cambia cada 6s
        if(num == array[num]){
            await new Promise(resolve => setTimeout(resolve, 6000));

            if(key){
                setNum(num+1)
            }
        
        }
    }; slide()
        
    const changeMovieMinus = ()=>{//bajar de numero -flecha izquierda del slide <-
        key = false
        if(num != 1){
            setNum(num-1)
            setViewTrailer(false)
        }  
    };

    const changeMoviePlus = ()=>{//subir de numero -flecha derecha del slide ->
        key = false
        if (num != 6){
            setNum(num+1)
            setViewTrailer(false)
        }  
    };

    const handleHover = ()=>{//desactiva las propiedades del numero con hover estatico
        setHover(false)
    };

    const handleUnhover = ()=>{//vuelve activar las propiedades del numero con hover estatico
       setHover(true)
    };

    const searchTrailer=(e)=>{//apertura y busqueda del trailers
        key=false
        setIdTrailer(e.target.id)
        setViewTrailer(true)
    }
    const closeModal=()=>{//cierre del trailer
        setViewTrailer(false)
        setTrailer("")
        console.log("ingreso")
    }
    const background = {//propiedades para el background del hero
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
        <div>
        {newArray.length > 0 ?
            <section style={background}>
            {/* modal para trailer */}
            {
            newArray.map((item, index) => (index+1 == num 
                ? 
                <div id="youtubeModal" style={{display:num == index + 1 &&viewTrailer ? "flex" : "none",width:"100%",height:"100%", position:"absolute", zIndex:"200",justifyContent:"center", alignItems:"center"}}>
                        <button style={{color:"white",fontSize:"2rem",position:"absolute",top:"2.2em",right:"1.3em"}} onClick={closeModal}><i class="bi bi-x-lg"></i></button>
                        <iframe class="youtube-video" src={trailer} frameborder="0" allowfullscreen style={{width:"100vw",height:"100vh",alignSelf:"center"}}></iframe>
                </div>
                :
                <p style={{display:num === index + 1 && viewTrailer?"flex":"none"}}>no hay trailer</p>
            ))}
            <Header></Header>
            <section className="hero position-relative px-5">
                {newArray.map((item, index) => (index <= 5?
                    <>
                    <div className="hero-movie" style={{display:num === index + 1?"block":"none"}} key={index}>
                      <div className="hero-description d-flex align-items-center position-absolute">
                        <button className="btn px-4 colorButton ms-2">Book Now</button>
                        <p>{months.map((e,index) =>
                            index+1==Number(item.releaseDate.month)?e:null)} {item.releaseDate.day},{item.releaseDate.year}<br /> IMAX 3D</p>
                      </div>
                      <div className="hero-trailer position-absolute">
                        <button  className="btn-trailer"><i id={item.id} onClick={searchTrailer} className="bi bi-play-fill"></i></button>
                        <p >Watch Trailer</p>
                      </div>
                    </div>
                  
                  <div className="hero-content">
                    <div className="social-media position-absolute">
                      <a href="#facebook"><i className="bi bi-facebook"></i></a>
                      <a href="#twitter"><i className="bi bi-twitter-x"></i></a>
                      <a href="#instagram"><i className="bi bi-instagram"></i></a>
                    </div>
                    { index==0?
                 
                        <div className="hero-slide d-flex position-absolute">
                        <button onClick={changeMovieMinus}><i className="bi bi-arrow-left"></i></button>
                        <div className="hero-slide-page d-flex" > 
                        {newArray.map((item, index) => (index <= 5?
                                <p
                                key={index}
                                onMouseEnter={handleHover}
                                onMouseLeave={handleUnhover}
                                style={num === index + 1 && hover ? hoverAuto : null}
                                id={index}
                                onClick={changeMovie}
                                >
                                <a className="page-link" href="#">{index <= 5 ? `0${index + 1}` : null}</a>
                                </p>:null
                                ))}
                        </div>
                        <button onClick={changeMoviePlus}><i className="bi bi-arrow-right"></i></button>
                      </div>:null
                      }
                    </div>
                    </>:null
                ))}
            </section>
            </section>
            : <p>Not Found!</p> }
        </div>
      );
}
export default Hero;