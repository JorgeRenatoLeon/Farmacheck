import React from "react";
import './titleContainer.scss';
import { useHistory } from "react-router";

const TitleContainer = (props) => {
  const history = useHistory();

  const {product, quantity, concentration} = props;

  const goBack = () => {
    history.goBack();
  }

  function titleWidth(type){
    if(type==="product"){
      if(quantity===undefined || concentration===undefined){
        return {
          maxWidth: "90%"
        }
      }
      else {
        return {
          maxWidth: "33%"
        }
      }
    }
    else{
      if(quantity===undefined || concentration===undefined){
        return {
          display: "none"
        }
      }
      else {
        return {
          maxWidth: "33%"
        }
      }
    }
  }

  return (           
      <div className="card-titleContainer">   
        <div className="row m-0">       
          <div className="col icon-container">
            <div className="icon-title">
                <i className="bi bi-arrow-left" onClick={goBack}></i>
            </div>
          </div>
          <div className="col card-title">
            <div className="card-title-titleContainer" style={titleWidth("product")} data-toggle="tooltip" data-placement="top" title={product}>{product}</div>
            <div className="card-title-titleContainer-quantity" style={titleWidth("quantity")} data-toggle="tooltip-quantity" data-placement="top" title={quantity}>{quantity? " | "+quantity:""}</div>  
            <div className="card-title-titleContainer-concentration" style={titleWidth("concentration")} data-toggle="tooltip-concentration" data-placement="top" title={concentration}>{concentration? " | "+concentration:""}</div>
          </div>          
        </div>        
      </div>  
  );
};

export default TitleContainer;