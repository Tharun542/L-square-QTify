import React from "react";
import "./Hero.css";
import headphone from "../../assets/headphone.svg";

const Hero =()=>{
    return (
        <div className="hero">
            <div className="hero-section">
                <h1>100 Thousand songs, ad-free</h1>
               <h1>Over thousand podcast episodes</h1>
            </div>
            <div className="heroImg">
                <img src={headphone} alt="headphone" />
            </div>
            
        </div>
    )
}

export default Hero;

