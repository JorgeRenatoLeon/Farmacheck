import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import SeeMoreButton from "../../components/SeeMoreButton/SeeMoreButton";
import { useHistory } from "react-router";
import * as ROUTES from "../../routes/routes";
import services from "../../services/apiProduct";

import './search.scss';

const Search = () => {
    const history = useHistory();

    // setTimeout(() => {
        // history.push(ROUTES.SPLASHSCREEN);
    // }, 2500);

    const [searchString, setSearchString] = React.useState("");

    const [page, setPage] = React.useState(1);
    const [loading, setLoading] = React.useState(false);
    const [total, setTotal] = React.useState(0);

    const [products, setProducts] = React.useState([]);
    
    async function search(word, pageNumber) {
        var results = []
        await services
            .searchProducts(pageNumber, 10, word)
            .then((response) => {
                setLoading(false);
                setTotal(response.data.total);
                results = response.data.productos ? response.data.productos : [];
            })
            .catch((e) => {
                console.log(e);
                setLoading(false);
            });
        return results;
    }

    async function  handleSearch(word){
        setSearchString(word)
        if(word.length >= 3){
            var results = await search(word, 1);
            setPage(1)
            setProducts(results);
        }
    }

    async function moreResults(){
        setLoading(true);
        var newPage = await search(searchString, page + 1 );
        setPage(page+1)
        setProducts(products.concat(newPage))
    }
    
    const handleClick = () =>{
        history.push(ROUTES.SEARCHPRODUCTS);
    }

    function goToDetails(product){
        console.log("goToDetails")
        history.push(ROUTES.SEARCHPRODUCTS, {product: product});
    }

    function visible(statement){
        if(statement){
            return {
                display: "none"
            }
        }
        else return null
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

            <div className="results-info" style={visible(total===0)}>
                {"Total de resultados: " + total}
            </div>

            <div className="results-container">
                {products.map((product, index)=>{
                return (
                    <ProductCard 
                        key={"cardP-"+index}
                        title={product.producto}
                        clickFunction={goToDetails}
                    />
                );
                })}

                <SeeMoreButton title="Ver más" clickFunction={moreResults} visible={visible(loading || products.length===0 || products.length===total)}/>
            </div>
        </div>
    );
};

export default Search;