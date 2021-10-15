import React from "react";
import './commentsCard.scss';

const CommentsCard = (props) => {

  return (      
    <div className="card-comments">         
        <p className="first-text">Envianos tus comentarios a</p> 
        <p className="second-text">info@farmacheck.pe</p>       
    </div>  
  );
};

export default CommentsCard;