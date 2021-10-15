import React from "react";
// import { useHistory } from "react-router";
// import * as ROUTES from "../../routes/routes";

import './seeMoreButton.scss';

const SeeMoreButton = (props) => {
    // const history = useHistory();

    // setTimeout(() => {
    //     history.push(ROUTES.SPLASHSCREEN);
    // }, 2500);
  
    const { clickFunction } = props;

    return (
        <div name="SeeMoreButton" className="see-more-container d-grid">
            <button type="button" className="btn btn-primary" onClick={clickFunction.bind(this)}>
                VER MAS
            </button>
        </div>
    );
};

export default SeeMoreButton;