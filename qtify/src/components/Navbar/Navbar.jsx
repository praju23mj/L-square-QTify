import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";

function Navbar(){
    return(
        <nav className={styles.navbar}>
            <a href="/">
                <Logo/>
            </a>
        </nav>
    )
}


export default Navbar;