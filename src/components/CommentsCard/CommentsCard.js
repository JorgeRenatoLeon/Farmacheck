import React from "react";
import './commentsCard.scss';
import { Link } from "react-router-dom";
import * as ROUTES from "../../routes/routes";
import InformationIcon from "../../assets/svg/InformationIcon.svg";

const CommentsCard = (props) => {

  return (      
    <div className="card-comments">         
        <div className="row card-comments-content">
          <div className="col icon-content">
            <Link to={ROUTES.TERMSANDCONDITIONS} className="icon-link">
              <img src={InformationIcon} alt="Information" width="40px" height="40px" />
            </Link>
          </div>
          <div className="col text-content">
            <p className="first-text">
              Envíanos tus comentarios a
            </p> 
            <a className="second-text" href="mailto:info@farmacheck.pe">info@FarmaCheck.pe</a>  
          </div>     
        </div>
    </div>  
  );
};

export default CommentsCard;