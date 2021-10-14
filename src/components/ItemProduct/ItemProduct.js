import React from "react";
import './itemProduct.scss';
const ItemProduct = (props) => {
  
  const {title, subtitle, price} = props;

  return (                  
    <div className="container itemProductContainer">
        <div className="row">
            <div className="col">
                <p className="p-title">{title}</p>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <p className="p-subtitle">{subtitle}</p>
            </div>
            <div className="col">
                <span className="p-subtitle">s/</span>
                <span className="p-price">{price}</span>
            </div>
        </div>
    </div>
  );
};

export default ItemProduct;