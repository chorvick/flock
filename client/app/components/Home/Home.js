import React from 'react';
import MainImage from "../../img/main.png";
import 'whatwg-fetch';



const Home = () => {
  return (
    <div className="container center-align">
      <img src={MainImage} alt="torchlight in the sky" />
    </div>
  )
}

export default Home

