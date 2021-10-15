import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import SeeMoreButton from "../../components/SeeMoreButton/SeeMoreButton";
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
    const [loading, setLoading] = React.useState(false);

    const [products, setProducts] = React.useState([
        "Arcalion",
        "Arcobax",
        "Arcodex",
        "Arcoflam",
        "Arcolane"
    ]);
    
    function search(word, pageNumber) {
        services
            .searchProducts(pageNumber, 10, word)
            .then((response) => {
                console.log(response)
                setLoading(false);
                return response.precios;
            })
            .catch((e) => {
                console.log(e);
                setLoading(false);
                return [];
            });
    }

    function handleSearch(word){
        setSearchString(word)
        if(word.length >= 3){
            setProducts(search(word, page));
        }
    }

    function moreResults(){
        setLoading(true);
        var newPage = search(searchString, page + 1 );
        setPage(page+1)
        setProducts(products.concat(newPage))
    }

    return (
        <div name="Search" className="search-container">
            <div className="search-input">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Busca por nombre comercial o genérico"
                        value={searchString}
                        onChange={(event) => {
                          handleSearch(event.target.value);
                        }}
                    />
                    <span className="input-group-text">
                        <i className="bi-search input-icon"></i>
                    </span>
                </div>
            </div>

            <div className="results-info">
                {"Total de resultados: " + products.length}
            </div>

            <div className="results-container">
                {products.map((product, index)=>{
                return (
                    <ProductCard 
                        key={"cardP-"+index}
                        title={product}
                    />
                );
                })}
            </div>

            <SeeMoreButton title="Ver más" clickFunction={moreResults} disabled={loading}/>
        </div>
    );
};

export default Search;