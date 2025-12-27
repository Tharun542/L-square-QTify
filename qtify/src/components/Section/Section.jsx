import React, { useEffect, useState } from "react";
import "./Section.css";
import FetchTopAlbums from "../Api/Api";
import Card from "../Card/Card"

 const Section=()=>{
  const [topAlbums, setTopAlbums] = useState([]);

  useEffect(()=>{
    FetchTopAlbums().then((data)=>{setTopAlbums(data)})
  },[])

  return(
    <div className="section">
        <div className="section1">
            <h1 className="top">Top Albums</h1>
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