import React, { useEffect, useState } from "react";
import "./Section.css";
import FetchTopAlbums from "../Api/Api";
import Card from "../Card/Card"

 const Section=()=>{
  const [albums, setAlbums] = useState([]);

  useEffect(()=>{
    FetchTopAlbums().then((data)=>{setAlbums(data)})
  },[])

  return(
    <div className="section">
        <div className="section1">
            <h1 className="top">top Albums</h1>
            <button className="btn">collapse</button>
        </div>
        <div className="albums">
          {albums.map((album)=>(
            <Card key={album.id} title={album.title} image={album.image} follows={album.follows}/>
        ))}
        </div>
    </div>
  );
}

export default Section;