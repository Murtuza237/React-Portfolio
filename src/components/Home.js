import React from 'react';
import "../App.css";
import prof from "../Images/profile.tiff"


const Home = () => {
  return (
    <section id="home">
      <div className='wrapper'>
      <h1>Welcome to My Portfolio</h1>
        <img src={prof} className="home-image" alt=""/>
        <h2>Hi, I'm Murtuza Ali</h2>
        <h3>Python Programmer | Web Deveplor | C/C++ | MySql </h3>
      </div>
    </section>
  );
};

export default Home;