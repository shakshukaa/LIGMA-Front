import React from "react";
import classes from "./MainHeader.module.css"

const MainHeader = () =>{
    return(
        <div className={classes.header}>
            <h1>LIGMA</h1>
            <p>HOME</p>
            <p>MAP</p>
            <p>ABOUT</p>
        </div>
    );
}

export default MainHeader;