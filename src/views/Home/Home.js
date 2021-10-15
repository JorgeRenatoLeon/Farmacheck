import React from "react";
import { useHistory } from "react-router";
import * as ROUTES from "../../routes/routes";
import Logo from "../../assets/img/logo.jpg"
import Information from "../../components/Information/Information"

import './home.scss';

const Home = () => {
  const history = useHistory();

  setTimeout(() => {
    setShowInfo(true);
    setTimeout(() => {
      history.push(ROUTES.SEARCH);
    }, 2500);
  }, 2500);
  
  const [showInfo, setShowInfo] = React.useState(false);

  return (
    <div name="Home" className="home-container">
      {!showInfo ? 
      (
        <div>
          <div className="logo-container">
            <div className="logo">
              <img src={Logo} alt="logo" width="200px" height="200px"/>
            </div>
            <div className="text-container">
              <div className="logo-text">
                FARMA
              </div>
              <div className="logo-icon">
                <img src={Logo} alt="logo" width="50px" height="50px"/>
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
                src={Logo}
                alt="logo" width="250px" height="100px"/>
            </div>
            <div className="bottom-logo-icon">
              <img 
                src={Logo}
                alt="logo" width="250px" height="100px"/>
            </div>
          </div>
        </div>
      )
      :
      (
        <Information />
      )}
    </div>
  );
};

export default Home;
