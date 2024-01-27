import React from "react";
import styles from "./Search.module.css";
import {ReactComponent as Searchicon} from "../../assets/Searchicon.svg";


function Search({ placeholder }){
    const onSubmit=(e)=>{
        e.preventDefault();
        // process and some form logic is here in the future
    }
    return(
        <form className={styles.wrapper} onSubmit={onSubmit}>
            <input className={styles.search} placeholder={placeholder} required/>
            <button className={styles.searchButton}type="submit">
                <Searchicon/>
            </button>
        </form>
    )
}

export default Search;