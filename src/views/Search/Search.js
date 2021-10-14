import React from "react";
// import { useHistory } from "react-router";
// import * as ROUTES from "../../routes/routes";
import services from "../../services/apiProduct";

import './search.scss';

const Search = () => {
    // const history = useHistory();

    // setTimeout(() => {
    //     history.push(ROUTES.SPLASHSCREEN);
    // }, 2500);

    const [searchString, setSearchString] = React.useState("");

    const [page, setPage] = React.useState(1);

    const[results, setResults] = React.useState([])
    
    function search(word) {
        services
            .searchProducts(page, 10, word)
            .then((response) => {
                console.log(response)
                setResults(response.precios);
            })
            .catch((e) => {
                console.log(e);
            });
    }

    function handleSearch(word){
        setSearchString(word)
        if(word.length >= 3){
            search(word)
        }
    }

    return (
        <div name="Search" className="search-container">
            <div className="search-input">
                <div className="input-group">
                    <span className="input-group-text">
                        <i className="bi-search input-icon"></i>
                    </span>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Buscar..."
                        onChange={(event) => {
                          handleSearch(event.target.value);
                        }}
                    />
                </div>
            </div>

            <div className="see-more-btn d-grid">
                <button type="button" class="btn btn-primary">
                    VER MAS
                </button>
            </div>
        </div>
    );
};

export default Search;