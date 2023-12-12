import axios from "axios";
import { useEffect, useState } from "react";
import Header from '../../components/Header';
import { Link } from "react-router-dom"

function Profiles(){
    const [profiles, setProfiles] = useState([]);
    useEffect(()=>{
        async function obtainProfiles(){
            const data = await axios.request({method:"GET",url:"http://localhost:3001/profiles"})
            console.log(data.data)
            setProfiles(data.data)
        }
        obtainProfiles()
    },[])
    return(
        <>
        <Header/>
        <div class="d-flex justify-content-center">
            <h1> who's watching?</h1>
        </div>
    
        <div class="d-flex justify-content-center">
        {
            profiles.map((e)=>{
                const partes = e.image.split('/');
                const nombreArchivo = partes[partes.length - 1];
              return(
                
                <div class='m-5 '>
                <img width="140" height="140" class="bd-placeholder-img rounded-circle" src={nombreArchivo} alt="" />
                <h4 class="fw-normal text-center">{e.name}</h4>
                </div>
                
              )

              
            })}
            <div class="d-flex flex-column justify-content-center">
            <Link to={'/createProfile'}><i class="rounded-circle fa-solid fa-plus bg-white"></i></Link>
            <Link><i class= "fa-solid fa-pen-to-square bg-white rounded-circle"></i></Link>
            </div>
           
        </div>
    
        </>
    )
}

export default Profiles