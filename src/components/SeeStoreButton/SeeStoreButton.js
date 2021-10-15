import React from "react";
import './seeStoreButton.scss';

const SeeStoreButton = (props) => {    
  
    const { clickFunction } = props;

    return (
        <div name="SeeMoreStoresButton" className="container">
            <button type="button" className="see-store-container" onClick={clickFunction.bind(this)}>
                Ver lugares de compra
            </button>
        </div>
    );
};

export default SeeStoreButton;