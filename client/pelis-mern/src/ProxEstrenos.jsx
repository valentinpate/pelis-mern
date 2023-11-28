import axios from "axios";
import { useEffect, useState } from "react";
import "./sketch.css"

function ProxEstrenos(){
    const options = {

    }

    return(
        <section class="px-5 mb-5">
            <div class="mb-5">
                <h4 class="text-uppercase text-light ms-4">Opening this week</h4>
            </div>
            <hr />
            <div class="d-flex flex-wrap">
                <div class="movie mx-2 mb-4 p-4 position-relative">
                    <img src="jl.jpg" alt="Movie IMG" class="mb-3" />
                    <p class="movie-title mb-2">Justice League</p>
                    <p class="movie-description m-0">118 min | ACTION</p>
                    <div class="estrenos-fecha d-flex align-items-center position-absolute">
                        <p class="prox-background text-light"><i class="fa-solid fa-calendar-days p-2"></i></p> 
                        <p class="prox-background text-light py-1 ps-3 pe-4">April 18</p>
                    </div>
                </div>
                <div class="movie mx-2 mb-4 p-4 position-relative">
                    <img src="jl.jpg" alt="Movie IMG" class="mb-3" />
                    <p class="movie-title mb-2">Justice League</p>
                    <p class="movie-description m-0">118 min | ACTION</p>
                    <div class="estrenos-fecha d-flex align-items-center position-absolute">
                        <p class="prox-background text-light"><i class="fa-solid fa-calendar-days p-2"></i></p> 
                        <p class="prox-background text-light py-1 ps-3 pe-4">April 18</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProxEstrenos