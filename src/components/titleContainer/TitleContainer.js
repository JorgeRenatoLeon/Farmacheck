import React from "react";
import './titleContainer.scss';
const TitleContainer = (props) => {
  
  const {title} = props;

  return (
    <div className="container">          
      <div className="card-titleContainer">   
        <div className="row m-0">       
          <div className="col-1">
            <div className="icon-title">
                <i className="bi bi-arrow-left"></i>
            </div>
          </div>
          <div className="col">
            <div className="card-title-titleContainer">
                {title}
            </div>
          </div>          
        </div>        
      </div>  
    </div>
  );
};

export default TitleContainer;