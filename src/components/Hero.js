import React from "react";

// import logo from "../assets/logo.svg";
import img from '../assets/plant_birds_eye_cropped.jpg';

// styles
import "../hero.scss";

const Hero = () => (
  <div className="home">
     <img src={img} alt="plant" className='image'/>
  </div>
);

export default Hero;
