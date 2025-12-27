import React, { useEffect, useState } from "react";
import "./Section.css";
import Card from "../Card/Card"

 const Section=({title, fetchData})=>{
  const [topAlbums, setTopAlbums] = useState([]);

  useEffect(()=>{
    fetchData().then((data)=>{setTopAlbums(data)})
  },[fetchData])

  return(
    <div className="section">
        <div className="section1">
            <h1 className="top">{title}</h1>
            <button className="btn">Collapse</button>
        </div>
        <div className="albums">
          {topAlbums.map((album)=>(
            <Card key={album.id} title={album.title} image={album.image} follows={album.follows}/>
        ))}
        </div>
    </div>
  );
}

export default Section;