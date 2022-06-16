import React from "react";
import './header.css';
import image from 'src/assets/images/AVT.jpg';
const Header=()=>{
    return(
        <header>

      
            <h1 className="header-title ">Tra cứu thông tin tuyển sinh </h1>
            <div className="header-image-container"> 
            <img className="header-avt mx-auto " src={image} alt="avt"/>
            </div>
            
            </header>
        )

}
export default Header;