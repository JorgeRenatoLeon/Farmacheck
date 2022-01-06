import React from "react";
import './titleContainer.scss';
import { useHistory } from "react-router";
import ArrowLeftSolid from "../../assets/svg/ArrowLeftSolid.svg";

const TitleContainer = (props) => {
  const history = useHistory();

  const {product, quantity, concentration, tabs} = props;

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
      <div className={tabs?"card-titleContainer-tabs":"card-titleContainer"}>   
        <div className="row m-0">       
          <div className="col icon-container">
            <div className="icon-title">
                <img src={ArrowLeftSolid} alt="arrow" width="20px" height="20px" onClick={goBack} />
            </div>
          </div>
          <div className="col card-title">
            <div
              className={quantity===undefined || concentration===undefined ?
                'card-title-titleContainer tooltip-container' : 'card-title-titleContainer tooltip-container small-tooltip'}
              style={titleWidth("product")}
              data-toggle="tooltip" data-placement="top" title={product}
            >
              <div className="title-text-container">
                {product}
              </div>
              <span className="tooltiptext">{product}</span>
            </div>
            <div className="card-title-titleContainer-quantity tooltip-container" style={titleWidth("quantity")} data-toggle="tooltip-quantity" data-placement="top" title={quantity}>
              <div className="title-text-container">
                <strong>|</strong>
                {quantity? quantity:""}
              </div>
              <span className="tooltiptext">{quantity}</span>
            </div>  
            <div className="card-title-titleContainer-concentration tooltip-container" style={titleWidth("concentration")} data-toggle="tooltip-concentration" data-placement="top" title={concentration}>
              <div className="title-text-container">
                <strong>|</strong>
                {concentration? concentration:""}
              </div>
              <span className="tooltiptext">{concentration}</span>
            </div>
          </div>          
        </div>        
      </div>  
  );
};

export default TitleContainer;