import axios from "axios";

const API_URL = 
"https://rest1.farmacheck.pe/";
//"http://44.197.85.123:9080/buscador-precios/";

const API_URL_LOCAL = 
"http://44.197.85.123:9080/buscador-precios/";

const searchProducts = (firstResult, maxResults, producto) => {
    const obj = {
        keyCode: "aY0Jy2T6b6LLvMfBzI2pI5dPAfcqyvK",
        firstResult,
        maxResults,
        producto
    }
    return axios.post(
      API_URL + "productos",
      obj,
    );
};

const searchProductDetails = (firstResult, maxResults, producto) => {
    return axios.post(
        API_URL + "detalle",
        {
            keyCode: "aY0Jy2T6b6LLvMfBzI2pI5dPAfcqyvK",
            firstResult,
            maxResults,
            producto
        },
    );
};

const searchProductPrices = (firstResult, maxResults, producto, presentacion, concentracion) => {
    return axios.post(
        API_URL + "precios",
        {
            keyCode: "aY0Jy2T6b6LLvMfBzI2pI5dPAfcqyvK",
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
        API_URL_LOCAL + "distritos",
        {
            keyCode: "aY0Jy2T6b6LLvMfBzI2pI5dPAfcqyvK",
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
        API_URL_LOCAL + "locales",
        {
            keyCode: "aY0Jy2T6b6LLvMfBzI2pI5dPAfcqyvK",
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