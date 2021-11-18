import axios from "axios";

const API_URL = 
// "https://rest1.farmacheck.pe/";
// "http://localhost:9080/buscador-precios/";
// "http://44.197.85.123:9080/buscador-precios/";
window.globalConfig || { url: process.env.REACT_APP_WEB_SERVICES_URL, keyCode: process.env.REACT_APP_KEYCODE} ;

const searchProducts = (firstResult, maxResults, producto) => {
    const obj = {
        keyCode: API_URL.keyCode,
        firstResult,
        maxResults,
        producto
    }
    return axios.post(
      API_URL.url + "productos",
      obj,
    );
};

const searchProductDetails = (firstResult, maxResults, producto) => {
    return axios.post(
        API_URL.url + "detalle",
        {
            keyCode: API_URL.keyCode,
            firstResult,
            maxResults,
            producto
        },
    );
};

const searchProductPrices = (firstResult, maxResults, producto, presentacion, concentracion) => {
    return axios.post(
        API_URL.url + "precios",
        {
            keyCode: API_URL.keyCode,
            firstResult,
            maxResults,
            producto,
            presentacion,
            concentracion
        },
    );
};

const searchProductPricesByDistricts = (firstResult, maxResults, marca, laboratorio, presentacion, concentracion) => {
    return axios.post(
        API_URL.url + "distritos",
        {
            keyCode: API_URL.keyCode,
            firstResult,
            maxResults,
            marca,
            laboratorio,
            presentacion,
            concentracion
        },
    );
};

const searchProductPricesByLocal = (firstResult, maxResults, marca, laboratorio, presentacion, concentracion, departamento, provincia, distrito) => {
    return axios.post(
        API_URL.url + "locales",
        {
            keyCode: API_URL.keyCode,
            firstResult,
            maxResults,
            marca,
            laboratorio,
            presentacion,
            concentracion, 
            departamento, 
            provincia,
            distrito

        },
    );
};

const services = {
    searchProductDetails,
    searchProductPrices,
    searchProducts,
    searchProductPricesByDistricts,
    searchProductPricesByLocal
}

export default services;