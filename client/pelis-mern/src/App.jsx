import axios from 'axios';
import { useEffect, useState } from 'react'
import Hero from './Hero';

function App() {
const [newArray,setArray]=useState([])
let [dependencias, setDependencias]=useState(0)

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
        list: 'most_pop_series'
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
  


  return (
    <>
      <Hero newArray={newArray}></Hero>
      <button onClick={prueba}>recargar</button>
    </>
  );
}

export default App;
