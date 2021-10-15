import React from "react";
import './titleContainer.scss';
import { useHistory } from "react-router";

const TitleContainer = (props) => {
  const history = useHistory();

  const {product, quantity, concentration} = props;

  const goBack = () => {
    history.goBack();
  }

  return (           
      <div className="card-titleContainer">   
        <div className="row m-0">       
          <div className="col-1">
            <div className="icon-title">
                <i className="bi bi-arrow-left" onClick={goBack}></i>
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