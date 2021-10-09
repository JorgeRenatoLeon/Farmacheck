import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="logo-container">
        <div className="logo">
          <img src="https://www.pngfind.com/pngs/m/126-1265657_spotifylogoswap-walmart-logo-sin-fondo-hd-png-download.png" alt="logo" width="200px" height="200px"/>
        </div>
        <div className="text-container">
          <div className="logo-text">
            Farma
          </div>
          <div className="logo-icon">
            <img src="https://www.pngfind.com/pngs/m/126-1265657_spotifylogoswap-walmart-logo-sin-fondo-hd-png-download.png" alt="logo" width="50px" height="50px"/>
          </div>
        </div>
        <div className="text-description-container">
          <div className="text-description">
            Tu decides dónde compras tus medicinas al mejor precio
          </div>
        </div>
        <div class="search-container input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            <i class="bi-alarm" style={{fontSize: "2rem", color: "cornflowerblue"}}></i>
          </span>
          <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
      </div>
      <div className="bottom-logos">
        <div className="bottom-logo-icon">
          <img 
            src="https://www.pngfind.com/pngs/m/126-1265657_spotifylogoswap-walmart-logo-sin-fondo-hd-png-download.png"
            alt="logo" width="50px" height="50px"/>
        </div>
        <div className="bottom-logo-icon">
          <img 
            src="https://www.pngfind.com/pngs/m/126-1265657_spotifylogoswap-walmart-logo-sin-fondo-hd-png-download.png"
            alt="logo" width="50px" height="50px"/>
        </div>
      </div>
    </div>
  );
}

export default App;
