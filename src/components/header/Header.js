import React from "react";
import pic from "../images/cobshop.PNG"
import "./header.css";
const Header = () => {
  return (
    <div className="container-fluid" style={{ padding: "0",position:"relative" }}>
      <div className="header-box">
      <div style={{display:"flex"}}>
      <div className="ham-contanier">
        <div class="one"></div>
        <div class="two"></div>
        <div class="three"></div>
        </div>
        <div><img className="logo" src={pic} alt="logo"/></div>
        </div>
        {/* <img className="menu-ham" src={img} alt="menu-pic" /> */}
        <div className="header-icon">
        <i class="far fa-bell fa-2x icon-color"></i>
        <i class="fas fa-user-alt fa-2x icon-color"></i>
        <i class="fas fa-shopping-cart fa-2x icon-color"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
