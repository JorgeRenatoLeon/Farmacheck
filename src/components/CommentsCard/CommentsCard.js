import React from "react";
import './commentsCard.scss';
import { Link } from "react-router-dom";
import * as ROUTES from "../../routes/routes";

const CommentsCard = (props) => {

  return (      
    <div className="card-comments">         
        <p className="first-text">
          <Link to={ROUTES.TERMSANDCONDITIONS} >
            <span className="icon-style"><i className="bi bi-exclamation-circle-fill"></i></span>
          </Link>
          Envíanos tus comentarios a
        </p> 
        <a className="second-text" href="mailto:info@farmacheck.pe">info@farmacheck.pe</a>       
    </div>  
  );
};

export default CommentsCard;