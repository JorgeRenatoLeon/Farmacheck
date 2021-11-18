import React from "react";
import './ItemLocal.scss';
const ItemLocal = (props) => {
  
  const {title, subtitle, price} = props;

  return (                  
    <div className="container itemProductContainer">
        <div className="row">
            <div className="col-8 align-self-end" style={{paddingRight: 0}}>
                <div className="row">
                    <p className="p-title">{title}</p>
                </div>
                <div className="row">
                    <p className="p-subtitle">{subtitle}</p>
                </div>
            </div>
            <div className="col-4 align-self-end">                
                <div className="p-price-container">
                    <span className="p-title">S/ </span>
                    <span className="p-price">{price.toFixed(2)}</span>
                </div>
            </div>
        </div> 
    </div>
  );
};

export default ItemLocal;