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
    async function avatar (){
        const options = {
            method: 'GET',
            url: 'https://username-profile-picture-generator.p.rapidapi.com/user/exampleusername',
            params: {bold: 'true'},
            headers: {
              'X-RapidAPI-Key': '67f656a5b7mshe2db331fbc1afbap1ac1d4jsn2028ca1c89f4',
              'X-RapidAPI-Host': 'username-profile-picture-generator.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              console.log(response.data);
          } catch (error) {
              console.error("este es el error",error);
          }
    }
    avatar()

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
              return(
                
                <div class='m-5 '>
                <img  onError={(e)=> {e.target.onerror = null; e.target.src = "/blank_user.png"}}  class="bd-placeholder-img rounded-circle border" src={e.image} alt="" />
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