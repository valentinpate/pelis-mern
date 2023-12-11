import { useState, useContext } from 'react'
import {NavLink, Navigate} from "react-router-dom"
import { UserContext } from '../../UserContext';
import axios from 'axios'
import Header from '../../components/Header';
import { Link } from "react-router-dom"

const Profiles = () => {


 

  return (
    <>
    <Header/>
    <div class="d-flex justify-content-center">
        <h1> who's watching?</h1>
    </div>
     
    <div class="d-flex justify-content-center">
    {
        <>
            <div class='m-5 '>
            <img width="140" height="140" class="bd-placeholder-img rounded-circle" src="/blank_user.png" alt="" />
            <h4 class="fw-normal text-center">Martu</h4>
            </div>
            <div class='m-5'>
            <img width="140" height="140" class="bd-placeholder-img rounded-circle" src="/blank_user.png" alt="" />
            <h4 class="fw-normal text-center">Martu</h4>
            </div>
            <div class='m-5'>
            <img width="140" height="140" class="bd-placeholder-img rounded-circle" src="/blank_user.png" alt="" />
            <h4 class="fw-normal text-center">Martu</h4>
            </div>
            <div class="d-flex flex-column justify-content-center">
            <Link><i class="rounded-circle fa-solid fa-plus bg-white"></i></Link>
            <Link><i class= "fa-solid fa-pen-to-square bg-white rounded-circle"></i></Link>
            </div>
        </>

    }
    </div>
    
    </>
  
  );
};

export default Profiles;
