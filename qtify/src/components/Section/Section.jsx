import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import "./Section.css";

const Section = ({ title, fetchData, showToggle=true, filteredData, children }) => {
  const [albums, setAlbums] = useState([]);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    fetchData().then(setAlbums);
  }, [fetchData]);
const displayData = filteredData ?? albums;
  return (
    <div className="section">
      <div className="section1">
        <h2 className="top">{title}</h2>
        {showToggle && (
          <button className="btn" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? "Collapse" : "Show All"}
        </button>
        )}
      </div>
        {children}
          {showToggle && collapsed ? (
            <Carousel
              items={displayData}
              renderItem={(album) => <Card {...album} />}
            />
          ) : showToggle ? (
            <div className="albums">
              {displayData.map((album) => (
                <Card key={album.id} {...album} />
              ))}
            </div>
          ) : (
          <Carousel items={displayData} renderItem={(album)=> <Card {...album} />} />)}
    </div>
  );
};

export default Section;
