import React from "react";
import { useHistory } from "react-router";
import * as ROUTES from "../../routes/routes";
import APEPS from "../../assets/svg/APEPS.svg";
import APESEG from "../../assets/img/APESEGCURVA.png";
import Farma from "../../assets/svg/Farma.svg";
import Farmacheck from "../../assets/img/farmacheck.png";
import Information from "../../components/Information/Information";
import SearchBox from "../../components/SearchBox/SearchBox";

import './home.scss';
import { Link } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  
  const session = JSON.parse(localStorage.getItem("session"));
  
  setTimeout(() => {
    if(session!==null){
      /*if(location.pathname === "/inicio"){
        history.push(ROUTES.SEARCH);
      }*/
    }
    else{
      setShowInfo(false);
      /*setTimeout(() => {
        console.log(location.pathname)
        if(location.pathname === "/inicio"){
          localStorage.setItem("session", JSON.stringify(true));
          history.push(ROUTES.SEARCH);
        }
      }, 7000);*/
    }
  }, 7000);
  
  const [showInfo, setShowInfo] = React.useState(false);

  const handleSearch = () =>{
    history.push(ROUTES.STOREPLACES);
  }


  return (
    <div name="Home" className="home-container">
      {!showInfo ? 
        (
          <>
            <div className="logo-container">
              <div className="logo">
                <img src={Farmacheck} alt="logo" width="100%" height="80%"/>
              </div>
              <div className="text-description-container">
                <div className="text-description-after">
                  Tú decides dónde comprar tus<br/> medicinas al mejor precio
                </div>
              </div>
            </div>
            <div className="search-input-container">
              <SearchBox searchMed={handleSearch}/> 
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
            <div className="text-description-container">
              <div className="text-description-after">
                Al usar el buscador estas sujeto a nuestros<br/>
                <Link to={ROUTES.TERMSANDCONDITIONS} className="link-tc">Términos y condiciones</Link>
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
