import axios from 'axios';
import { useEffect, useState } from 'react'
import Hero from './Hero';

function App() {
const [newArray,setArray]=useState([])
const [trailer,setTrailer]=useState("")
let [dependencias, setDependencias]=useState(0)
let[idTrailer,setIdTrailer]=useState("")

function prueba(){
 setDependencias(dependencias+1)
 console.log(dependencias)
}

  useEffect(()=>{
    async function llamado(){
    const options = {
      method: 'GET',
      url: 'https://moviesdatabase.p.rapidapi.com/titles/random',
      params: {
        info: 'base_info',
        list: 'top_boxoffice_200'
      },
      headers: {
        'X-RapidAPI-Key': '67f656a5b7mshe2db331fbc1afbap1ac1d4jsn2028ca1c89f4',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
    };
    
    try {
      const info = await axios.request(options)
       setArray(info.data.results);
      console.log("info ",info) 
    } catch (error) {
      console.error(error);
    }
  }llamado();
  },[dependencias])

  useEffect(()=>{
  async function llamadoTrailer(){
    const options = {
      method: 'GET',
      url: `https://moviesdatabase.p.rapidapi.com/titles/${idTrailer}`,
      params: {
        info: 'trailer',
      },
      headers: {
        'X-RapidAPI-Key': '67f656a5b7mshe2db331fbc1afbap1ac1d4jsn2028ca1c89f4',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
    };
    
    try {
      const infoTrailer = await axios.request(options)
       setTrailer(infoTrailer.data.results.trailer+"?autoplay=1");
      console.log("infoTrailer ",infoTrailer) 
      console.log("trailer",trailer)
        } catch (error) {
      console.error(error);
    }
  }llamadoTrailer();
  },[idTrailer])


  return (
    <>
      <Hero newArray={newArray} trailer={trailer} setIdTrailer={setIdTrailer}></Hero>
      <button onClick={prueba}>recargar</button>
    </>
  );
}

export default App;
