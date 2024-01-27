import React from "react";
import styles from "./Navbar.module.className";
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