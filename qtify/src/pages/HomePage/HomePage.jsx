import React from "react";
import Hero from "../../components/Hero/Hero";
import {useOutletContext} from "react-router-dom";
import Section from "../../components/Section/Section"
import styles from "./HomePage.module.css";

function HomePage(){
    const {data} = useOutletContext();
    const {topAlbums, newAlbums, songs}= data;
    return(
        <>
        <Hero/>
        <div className={styles.wrapper}>
            <Section title="Top Albums" data={topAlbums} type="albums"/>
            <Section title="New Albums" data={newAlbums} type="albums"/>
        </div>
        </>
    )
}

export default HomePage;