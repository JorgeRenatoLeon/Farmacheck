import React from "react";
import './itemProduct.scss';
const ItemProduct = (props) => {
  
  const {title, subtitle, price} = props;

  return (                  
    <div className="container itemProductContainer">
        <div className="row">
            <div className="col">
                <div className="row">
                    <p className="p-title">{title}</p>
                </div>
                <div className="row">
                    <p className="p-subtitle">{subtitle}</p>
                </div>
            </div>
            <div className="col">                
                <div className="p-price-container">
                    <span className="p-title">S/ </span>
                    <span className="p-price">{price.toFixed(2)}</span>
                </div>
            </div>
        </div> 
    </div>
  );
};

export default ItemProduct;