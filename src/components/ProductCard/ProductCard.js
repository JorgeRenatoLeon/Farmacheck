import React from "react";
// import { useHistory } from "react-router";
// import * as ROUTES from "../../routes/routes";

import './productCard.scss';

const ProductCard = (props) => {
    // const history = useHistory();

    // setTimeout(() => {
    //     history.push(ROUTES.SPLASHSCREEN);
    // }, 2500);
  
    const { title } = props;

    return (
        <div name="ProductCard" className="product-card-container">
            {title}
        </div>
    );
};

export default ProductCard;