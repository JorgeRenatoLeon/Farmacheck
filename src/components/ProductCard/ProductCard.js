import React from "react";
// import { useHistory } from "react-router";
// import * as ROUTES from "../../routes/routes";

import './productCard.scss';

const ProductCard = (props) => {
    // const history = useHistory();

    // setTimeout(() => {
    //     history.push(ROUTES.SPLASHSCREEN);
    // }, 2500);
  
    const { title, clickFunction } = props;

    return (
        <div name="ProductCard" className="product-card-container" onClick={() => clickFunction(title)}>
            {title}
        </div>
    );
};

export default ProductCard;