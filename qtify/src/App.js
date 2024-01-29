//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
//import Hero from "./components/Hero/Hero"
import {Outlet} from "react-router-dom";
import { fetchNewAlbums,fetchTopAlbums, fetchSongs } from './api/api';
import { useEffect,useState } from 'react';

function App() {

  const[searchData, setSearchData]= useState();
  const[data,setData]= useState({});

  
  const generateData=(key, source) =>{
    source().then((data)=>{
      setData((prevData)=>{
        return {...prevData, [key]: data};
      })
    })
  }

  useEffect(()=>{
    generateData("topAlbums", fetchTopAlbums );
    generateData("newAlbums", fetchNewAlbums );
    generateData("songs", fetchSongs );
  }, [])
  const {topAlbums=[], newAlbums=[],songs=[]}=data;

  return (
    <>
    <div>
      <Navbar/>
      <Outlet context={{data:{topAlbums, newAlbums, songs}}}/>
    </div>
    </>
  );
}
export default App;
