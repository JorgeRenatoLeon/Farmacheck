import React from "react";
import './commentsCard.scss';
import { Link } from "react-router-dom";
import * as ROUTES from "../../routes/routes";

const CommentsCard = (props) => {

  return (      
    <div className="card-comments">         
        <p className="first-text">
          <Link to={ROUTES.TERMSANDCONDITIONS} ><div className="icon-style"><i className="bi bi-exclamation-circle-fill"></i></div></Link>
          Envianos tus comentarios a
        </p> 
        <p className="second-text">info@farmacheck.pe</p>       
    </div>  
  );
};

export default CommentsCard;