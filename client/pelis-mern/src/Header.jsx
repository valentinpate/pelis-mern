import NavBar from './NavBar';
import './sketch.css'
import {NavLink} from "react-router-dom"

function Header(){
  
  return (
    <>
    <header class="d-flex justify-content-between py-4 px-5">
            <img src="/logo.png" alt="Movies Hub" class="logo"/>
            <div class="header-content d-flex justify-content-evenly align-items-center">
             <NavBar></NavBar>
                <button class="btn-search"><i class="bi bi-search px-5"></i></button>
                <NavLink to="/signin"><button class="btn px-4 colorButton ms-2">Sign in</button></NavLink>
            </div>
        </header>
  
    </>
  );
}

export default Header;