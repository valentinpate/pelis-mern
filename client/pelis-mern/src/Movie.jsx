import axios from "axios"
import {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import "./sketch.css"

function Movie(){
    const [movie,setMovie] = useState({})
    const {id} = useParams()
    useEffect(()=>{
        async function callMovie(){
            const options = {
                method: 'GET',
                url: `https://moviesdatabase.p.rapidapi.com/titles/${id}`,
                params: {
                    info: 'base_info',
                  },
                headers: {
                  'X-RapidAPI-Key': '67f656a5b7mshe2db331fbc1afbap1ac1d4jsn2028ca1c89f4',
                  'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
                }
              };
              
              try {
                const info = await axios.request(options)
                console.log(info.data.results)
                setMovie(info.data.results)
              } catch (error) {
                console.error(error);
              }
        }

        callMovie()
    },[])

    console.log(movie)

    return(
        <>
           <Header/>
           {movie.titleText ? 
           <section className="mx-4 my-3">
                <div className="container-fluid d-flex justify-content-evenly movie1">
                    <img src={movie.primaryImage.url} alt="" className="movie-img"/>
                    <div className="text-light">
                        <h1>{movie.titleText.text}</h1>
                        <h3 className="text-danger">{movie.releaseYear.year} | {movie.runtime.seconds/60} min</h3>
                        <h4>{movie.plot.plotText.plainText}</h4>
                        <h3><span className="text-warning">Rating:</span> {movie.ratingsSummary.aggregateRating}</h3>
                        <h6>Votos: {movie.ratingsSummary.voteCount}</h6>
                    </div>
                </div>
            <Footer/>
           </section> 
           : <h1 className="ms-3 mt-3 text-light text-center">Loading...</h1>}
        </>
    )
}

export default Movie