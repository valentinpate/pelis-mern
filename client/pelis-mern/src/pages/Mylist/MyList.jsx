import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import Header from '../../components/Header';
import '../../sketch.css'
import { UserContext } from '../../UserContext';

function MyList(){
  const {user, profileId, profileName} = useContext(UserContext)
  const [list, setList] = useState([])
  useEffect(()=>{
    async function getList(){
      try{
        const response = await axios.post("http://localhost:3001/lists/get-my-list", {id:user._id, profId:profileId}, {withCredentials:true})
        console.log(response)
        if(response.data.list.length == 0){
          console.log("no hay")
        }else{
          console.log("hay")
          setList(response.data.list)
        }
      }catch(err){console.log(err)}
    }
    getList()
  },[])
  console.log(list)
  return (
    <>
        <Header />
        <h1 className='text-light ms-3 text-center'>My List</h1>
        {list != [] ? 
        <>
          <div className='d-flex flex-wrap'>
            <h3 className="text-light">{profileId}</h3>
          </div> 
          <div>
          {list.length > 0 ? list.map((mov)=>{
            return(
              <h3 class="text-light">{mov.titleText.text}</h3>
            )
          }) : <h3 className="text-light">There are no movies in your list. Consider adding some.</h3>}
          </div>
        </>
          : <div class="mx-4 d-flex justify-content-center">
          <img src="/icon.png" alt="" className="loading-animation"></img>
        </div>}
    </>
  );
}

export default MyList;