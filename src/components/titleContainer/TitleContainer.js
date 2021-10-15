import React from "react";
import './titleContainer.scss';
const TitleContainer = (props) => {
  
  const {product, quantity, concentration} = props;

  return (           
      <div className="card-titleContainer">   
        <div className="row m-0">       
          <div className="col-1">
            <div className="icon-title">
                <i className="bi bi-arrow-left"></i>
            </div>
          </div>
          <div className="col">
            <div>
                <span className="card-title-titleContainer">{product}</span>
                <span className="card-title-titleContainer-quantity">{quantity? " | "+quantity:""}</span>  
                <span className="card-title-titleContainer">{concentration? " | "+concentration:""}</span>                
            </div>
          </div>          
        </div>        
      </div>  
  );
};

export default TitleContainer;