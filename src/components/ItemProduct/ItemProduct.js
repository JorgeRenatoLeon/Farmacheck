import React from "react";
import './itemProduct.scss';
const ItemProduct = (props) => {
  
  const {title, subtitle, price, clickFunction} = props;

  return (                  
    <div className="container itemProductContainer">
        <div className="row">
            <div className="col-6 align-self-end" style={{paddingRight: 0}}>
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
            <div className="col-2 align-self-center">  
                <span onClick={clickFunction}>
                    <i className="bi bi-chevron-compact-right icon-arrow-right"></i>
                </span>          
            </div>
        </div> 
    </div>
  );
};

export default ItemProduct;