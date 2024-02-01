import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Hero from './components/Hero/Hero';
import { useState , useEffect } from 'react';
import { fetchTopAlbums ,fetchNewAlbums} from './api/api';
import Section from './components/Section/Section';
function App() {
  const [topAlbumData,setTopAlbumData]=useState([]);
  const [newAlbumData,setNewAlbumData] = useState([]);

  const genrateTopAlbum=async () => {
    try{
      const data = await fetchTopAlbums();
      setTopAlbumData(data);
    }catch(err){
      console.log(err)
    }
  }

  const genrateNewAlbum=async () => {
    try{
      const data = await fetchNewAlbums();
      setNewAlbumData(data);
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    genrateTopAlbum();
    genrateNewAlbum();
  },[]);
  return (
    <div >
      <Navbar/>
      <Hero/>
      <Section data = {topAlbumData} title="Top Albums" type="album"/>
      <Section data = {newAlbumData} title="New Albums" type="album"/>
    </div>
  );
}

export default App;