import React from "react";
import Logo from "../Logo/logo"
import Search from "../Search/Search";
import Button from "../Buttons/Button";
import "./Navbar.css"

const Navbar =()=>{


    return(
        <div className="navbar">
        
        <Logo />
        <Search />
        <Button />
        </div>
        
    )
}

export default Navbar;