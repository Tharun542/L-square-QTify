// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";
import Section from "./components/Section/Section"
import { FetchNewAlbums, FetchTopAlbums } from './components/Api/Api';

function App() {
  return (
   <>
   <Navbar />
   <Hero />
   <Card />
   <Section title="Top Albums" fetchData={FetchTopAlbums} />
   <Section title="New Albums" fetchData={FetchNewAlbums}/>
   </>
  );
}

export default App;
