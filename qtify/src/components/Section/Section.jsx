import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import "./Section.css";

const Section = ({ title, fetchData }) => {
  const [albums, setAlbums] = useState([]);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    fetchData().then(setAlbums);
  }, [fetchData]);

  return (
    <div className="section">
      <div className="section1">
        <h2 className="top">{title}</h2>
        <button className="btn" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? "Show All" : "Collapse"}
        </button>
      </div>

      {collapsed ? (
        <Carousel
          items={albums}
          renderItem={(album) => <Card {...album} />}
        />
      ) : (
        <div className="albums">
          {albums.map((album) => (
            <Card key={album.id} {...album} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Section;
