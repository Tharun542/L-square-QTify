import React from "react";
import "./Card.css";
import Chip from "@mui/material/Chip";

const Card=({image, title, follows, likes})=>{

    return(
        <div className="card">
           <div className="card-image-container">
            <img src={image} alt={title} className="card-image" />
            <Chip label={likes ?? follows} className="card-chip"/>
           </div>
           <div className="album-title">
           {title}
           </div>
        </div>
    )
}

export default Card;