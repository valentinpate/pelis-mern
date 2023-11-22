

function Hero({newArray,num,changeMovie}){
const containerStyle = {
    backgroundImage: newArray.length>0?`url(${newArray[num].primaryImage.url})`:null,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  };
  const play ={
    fill:"#d41002"
  }
  return (
    <>
    { newArray.length>0?
            <>
            <div style={containerStyle}>
              <div>
                <h1>App de pelis</h1>
                <button type="button" class="btn btn-danger">Book Now</button>
              </div>
              <div>
                  <button class="btn btn-outline-primary rounded-circle p-3 lh-1" type="button">
                  <svg style={play} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
                  </button>
                  <nav aria-label="Page navigation example">
                    <ul class="pagination">
                      <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                        </a>
                      </li>
                      {
                        
                        newArray.map((item,index)=>
                          <>

                            <li id={index} onClick={changeMovie}><a class="page-link" href="#" >{index+1} </a></li>

                          </>
                        )
                        
                       
                      }
                      <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">&raquo;</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
              </div>
            </div>
           
            </>
         
       
          : <p>nada de nada</p>
       }
    </>
  );
}

export default Hero;