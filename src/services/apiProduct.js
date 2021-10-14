import axios from "axios";

const API_URL = " http://44.197.85.123:9080/buscador-precios/";

const searchProducts = (firstResult, maxResults, producto) => {
    const obj = {
        keyCode: "test",
        firstResult,
        maxResults,
        producto
    }
    console.log(obj)
    return axios.post(
      API_URL + "productos",
      obj,
    );
};

const searchProductDetails = (firstResult, maxResults, producto) => {
    return axios.post(
        API_URL + "productos",
        {
            keyCode: "test",
            firstResult,
            maxResults,
            producto
        },
    );
};

const searchProductPrices = (firstResult, maxResults, producto, presentacion, concentracion) => {
    return axios.post(
        API_URL + "productos",
        {
            keyCode: "test",
            firstResult,
            maxResults,
            producto,
            presentacion,
            concentracion
        },
    );
};

const services = {
    searchProductDetails,
    searchProductPrices,
    searchProducts,
}

export default services;