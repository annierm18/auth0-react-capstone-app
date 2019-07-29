import React, { Fragment } from "react";
import { Link } from 'react-router-dom';

import Hero from "../components/Hero";
import Content from "../components/Content";

// styles
import "../Landing.scss";

const Home = () => (
  <div className="landing">
  <Fragment>
    <Hero />
    <Content />
  </Fragment>

  <div className='landing__button'>
    <Link to="/get-started"><button className='landing__button__start'>Get Started Today!</button></Link>
  </div>
</div>
);

export default Home;
