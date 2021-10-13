import React from "react";
// import { useHistory } from "react-router";
// import * as ROUTES from "../../routes/routes";

import './search.scss';

const Search = () => {
    // const history = useHistory();

    // setTimeout(() => {
    //     history.push(ROUTES.SPLASHSCREEN);
    // }, 2500);

  return (
    <div name="Search" className="search-container">
        <div className="search-input">
            <div className="input-group">
                <span className="input-group-text">
                    <i className="bi-search input-icon"></i>
                </span>
                <input type="text" class="form-control" placeholder="Buscar..."/>
            </div>
        </div>

        <div className="see-more-btn">
            <button type="button" class="btn btn-primary">
                VER MAS
            </button>
        </div>
    </div>
  );
};

export default Search;