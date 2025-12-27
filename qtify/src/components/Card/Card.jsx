import React from "react";
import "./Card.css";
import Chip from "@mui/material/Chip";

const Card=({image, title, follows})=>{

    return(
        <div className="card">
           <div className="card-image-container">
            <img src={image} alt={title} className="card-image" />
            <Chip className="card-chip" label={follows}/>
           </div>
           <div className="album-title">
            <p className="album-name">{title}</p>
           </div>
        </div>
    )
}

export default Card;