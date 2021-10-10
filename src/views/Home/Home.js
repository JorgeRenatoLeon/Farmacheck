import React from "react";
// import { useHistory } from "react-router";
// import * as ROUTES from "../../routes/routes"; 

import './home.scss';

const Home = () => {
  // const history = useHistory();

  // setTimeout(() => {
  //   history.push(ROUTES.SPLASHSCREEN);
  // }, 2000);

  return (
    <div name="Home" className="home-container">
      <div className="logo-container">
        <div className="logo">
          <img src="https://www.pngfind.com/pngs/m/126-1265657_spotifylogoswap-walmart-logo-sin-fondo-hd-png-download.png" alt="logo" width="200px" height="200px"/>
        </div>
        <div className="text-container">
          <div className="logo-text">
            FARMA
          </div>
          <div className="logo-icon">
            <img src="https://www.pngfind.com/pngs/m/126-1265657_spotifylogoswap-walmart-logo-sin-fondo-hd-png-download.png" alt="logo" width="50px" height="50px"/>
          </div>
        </div>
        <div className="text-description-container">
          <div className="text-description">
            Tú decides dónde compras tus medicinas al mejor precio
          </div>
        </div>
      </div>
      <div className="bottom-logos">
        <div className="bottom-logo-icon">
          <img 
            src="https://www.pngfind.com/pngs/m/126-1265657_spotifylogoswap-walmart-logo-sin-fondo-hd-png-download.png"
            alt="logo" width="250px" height="100px"/>
        </div>
        <div className="bottom-logo-icon">
          <img 
            src="https://www.pngfind.com/pngs/m/126-1265657_spotifylogoswap-walmart-logo-sin-fondo-hd-png-download.png"
            alt="logo" width="250px" height="100px"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
