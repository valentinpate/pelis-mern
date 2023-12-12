import { useState, useContext } from 'react'
import axios from 'axios'

function CreateProfile(){
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
  
    const datosName = (e) => {
      setName(e.target.value);
    };
  
    const datosImage = (e) => {
      setImage(e.target.value);
    };
  
    const enviarDatos = (e) => {
      e.preventDefault();
  
      const userData = {name, image}
  
      
      axios.post('http://localhost:3001/createProfile', userData, { withCredentials: true })
        .then(response => 
          console.log(response)
        )
        .catch(error => {
            console.log(error)
        })
      };
    return(
        <>
            <form onSubmit={enviarDatos}>
                <div className='d-flex flex-column'>
                    <label className='p-2 text-start'>name:</label>
                    <input className='p-2 form-control' type="text"  value={name} onChange={datosName} required />
                </div>
                <div className='d-flex flex-column pb-2'>
                    <label className='p-2 text-start' >Image:</label>
                    <input className='p-2 form-control' type="text" value={image} onChange={datosImage} required />      
                </div>
            <button className='btn colorButton ancho mt-2 p-2' type="submit">Continuar</button>
            </form>
        </>
    )
}

export default CreateProfile