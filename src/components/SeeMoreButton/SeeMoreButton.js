import React from "react";
// import { useHistory } from "react-router";
// import * as ROUTES from "../../routes/routes";

import './seeMoreButton.scss';

const SeeMoreButton = (props) => {
    // const history = useHistory();

    // setTimeout(() => {
    //     history.push(ROUTES.SPLASHSCREEN);
    // }, 2500);
  
    const { title, clickFunction, disabled } = props;

    return (
        <div name="SeeMoreButton" className="see-more-container d-grid">
            <button type="button" disabled={disabled} className="btn btn-primary" onClick={clickFunction.bind(this)}>
                {title}
            </button>
        </div>
    );
};

export default SeeMoreButton;