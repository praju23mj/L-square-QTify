import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Hero from './components/Hero/Hero';
import styles from './App.module.css'
import { useState , useEffect } from 'react';
import { fetchTopAlbums ,fetchNewAlbums, fetchSongs} from './api/api';
import Section from './components/Section/Section';
import FilterSection from './components/FilterSection/FilterSection';


function App() {
  const [topAlbumData,setTopAlbumData]=useState([]);
  const [newAlbumData,setNewAlbumData] = useState([]);

  const [filteredDataValues, setFilteredDataValues] = useState([''])
  const [toggle, setToggle] = useState(false)
  const [value, setValue] = useState(0);

  const generateSongsData = (value) => {
    let songData = newAlbumData[0].songs;
    let key;
    if (value === 0) {
      setFilteredDataValues(songData)
      return;
    }
    else if (value === 1) {
      key = 'rock'
    }
    else if (value === 2) {
      key = 'pop'
    }
    else if (value === 3) {
      key = 'jazz'
    }
    else if (value === 4) {
      key = 'blues'
    }
    const data = songData.filter((item) => {
      return item.genre.key === key
    })
    setFilteredDataValues(data)
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
    generateSongsData(newValue)
  }
  const handleToggle = () => {
    setToggle(!toggle)
  }

  const filteredData = (val) => {
    generateSongsData(val)
    // console.log(val + ' filteredData is called from app.js')
  }

  const genrateTopAlbum=async () => {
    try{
      const data = await fetchTopAlbums();
      setTopAlbumData(data);
    }catch(err){
      console.log(err)
      return null;
    }
  }

  const genrateNewAlbum=async () => {
    try{
      const data = await fetchNewAlbums();
      setNewAlbumData(data);
    }catch(err){
      console.log(err)
      return null;
    }
  }

  const generateFilterSongs = async () => {
    try {
      const newAlbumSongs = await fetchSongs()
      // setNewAlbumSongs(newAlbumSongs);
      setFilteredDataValues(newAlbumSongs);
    }
    catch (error) {
      console.log(error)
      return null
    }
  }

  useEffect(() => {
    // eslint-disable-next-line
  }, [value])

  useEffect(() => {
    
    genrateTopAlbum();
    genrateNewAlbum();
    generateFilterSongs();
    // setFilteredDataValues(newAlbumSongs);

  }, [])
  
  return (
    <div >
      <Navbar/>
      <Hero/>
      <div className={styles.sectionWrapper}>
        <Section type='album' title='Top Albums' data={topAlbumData} />
        <Section type='album' title='New Albums' data={newAlbumData} />
        <FilterSection data={newAlbumData} type='songFilter' title='Songs' filteredData={filteredData} filteredDataValues={filteredDataValues} value={value} handleChange={handleChange} handleToggle={handleToggle}/>
      </div>
    </div>
  );
}

export default App;