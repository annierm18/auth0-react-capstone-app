import React from "react";

// import logo from "../assets/logo.svg";
import img from '../assets/plant_birds_eye_cropped.jpg';


const iStyle = {
  textAlign: "Center",
  justifyContent: 'Center',
  alignItems: 'Center !important',
};

const hStyle = {
  width: '1110px',
  objectFit: "cover",
  marginTop: '25px'
};

const Hero = () => (
  <div style={iStyle} className="home">
      <div className="nav-container__title">
          <h1>Water My Plants</h1>
      </div>
     <img style={hStyle} src={img} alt="plant" className='image'/>
  </div>
);

export default Hero;
