import { useEffect, useState } from "react";
import { Tabs, Tab } from "@mui/material";
import Section from "../Section/Section";
import axios from "axios";
import "./Songs.css";

const SongsSection = () => {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedTab, setSelectedTab] = useState("all");

  useEffect(() => {
    axios
      .get("https://qtify-backend.labs.crio.do/songs")
      .then((res) => setSongs(res.data));

    axios
      .get("https://qtify-backend.labs.crio.do/genres")
      .then((res) =>
        setGenres([{ key: "all", label: "All" }, ...res.data.data])
      );
  }, []);

  const filteredSongs =
    selectedTab === "all"
      ? songs
      : songs.filter((song) => song.genre.key === selectedTab);

  return (
    <Section
      title="Songs"
      fetchData={() => Promise.resolve(filteredSongs)}
      showToggle={false}
    >
      <Tabs
        value={selectedTab}
        onChange={(_, value) => setSelectedTab(value)}
        className="songs-tabs"
        TabIndicatorProps={{ style: { display: "none" } }}
      >
        {genres.map((genre) => (
          <Tab
            key={genre.key}
            value={genre.key}
            label={genre.label}
            className="song-tab"
          />
        ))}
      </Tabs>
    </Section>
  );
};

export default SongsSection;
