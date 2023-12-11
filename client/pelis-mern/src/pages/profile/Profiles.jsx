import axios from "axios";
import { useEffect } from "react";

function Profiles(){
    useEffect(()=>{
        async function obtainProfiles(){
            const data = await axios.request({method:"GET",url:"http://localhost:3001/profiles"})
            console.log(data)
        }
        obtainProfiles()
    },[])
    return(
        <>
            <h1 class="text-light">Perfiles</h1>
        </>
    )
}

export default Profiles