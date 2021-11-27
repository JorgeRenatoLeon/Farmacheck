import React from "react";
import { useHistory, useLocation } from "react-router";
import * as ROUTES from "../../routes/routes";
import APEPS from "../../assets/svg/APEPS.svg";
import APESEG from "../../assets/img/APESEGCURVA.png";
import Farma from "../../assets/img/farmacheck.png";
import Information from "../../components/Information/Information"

import './home.scss';

const Home = () => {
  const history = useHistory();
  const location = useLocation();
  
  const session = JSON.parse(localStorage.getItem("session"));
  
  setTimeout(() => {
    if(session!==null){
      console.log(location.pathname)
      if(location.pathname === "/inicio"){
        history.push(ROUTES.SEARCH);
      }
    }
    else{
      setShowInfo(true);
      setTimeout(() => {
        console.log(location.pathname)
        if(location.pathname === "/inicio"){
          localStorage.setItem("session", JSON.stringify(true));
          history.push(ROUTES.SEARCH);
        }
      }, 7000);
    }
  }, 7000);
  
  const [showInfo, setShowInfo] = React.useState(false);

  return (
    <div name="Home" className="home-container">
      {!showInfo ? 
        (
          <>
            <div className="logo-container">
              <div className="logo">
                <img src={Farma} alt="logo" width="100%" height="100%"/>
              </div>
              <div className="text-description-container">
                <div className="text-description">
                  Tú decides dónde compras<br/>tus medicinas al mejor precio
                </div>
              </div>
            </div>

            <div className="bottom-logos row m-0">
              <div className="bottom-logo-icon col p-0">
                <img 
                  src={APEPS}
                  alt="apeps" width="120px" height="135px"/>
              </div>
              <div className="bottom-logo-icon col p-0">
                <img 
                  src={APESEG}
                  alt="apeseg" width="130px" height="130px"/>
              </div>
            </div>
          </>
        )
        :
        (
          <Information />
        )
      }
    </div>
  );
};

export default Home;
