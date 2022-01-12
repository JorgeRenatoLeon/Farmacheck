import React from "react";
import { geolocated, geoPropTypes } from "react-geolocated";
import TitleContainer from "../../components/TitleContainer/TitleContainer";
import ItemLocal from "../../components/ItemLocal/ItemLocal";
import './storeResult.scss';
import { useHistory, useLocation } from "react-router";
import axios from "axios";
import * as ROUTES from "../../routes/routes";
import services from "../../services/apiProduct";

const API_GOOGLE = 
// "https://rest1.farmacheck.pe/";
// "http://localhost:9080/buscador-precios/";
// "http://44.197.85.123:9080/buscador-precios/";
window.globalConfig || { apiGoogleKey: process.env.REACT_APP_API_GOOGLE} ;

const apiGoogleUrl = "https://maps.googleapis.com/maps/api/geocode/json?latlng=";
const apiGoogleKey = API_GOOGLE.apiGoogleKey;

const StoreResult = (props) => {
  const history = useHistory();
  const location = useLocation();
  
  const [listProductOptions, setListProductOptions] = React.useState([]);

  React.useEffect(() => {

    async function iniSearch(){

      if(!location.state.geolocation) {
        var results = await search( 1, 
          location.state.productBrand, location.state.productLab,
          location.state.productOption, location.state.productVersion,
          location.state.productDepartment, location.state.productProvince, location.state.productDistrict);    
        setListProductOptions(results);
      }
    }

    if((location.state === undefined ||
      location.state.productOption === undefined ||
      location.state.productVersion === undefined ||
      location.state.productBrand === undefined ||
      location.state.productLab === undefined ||
      location.state.productDepartment === undefined ||
      location.state.productProvince === undefined ||
      location.state.productDistrict === undefined) && (!location.state.geolocation)){ 
      history.push(ROUTES.HOME);
    }
    else
      iniSearch();
  }, [location, history]);

  const [distrito, setDistrito] = React.useState("No encontrado")

  const [distritoBuscado, setDistritoBuscado] = React.useState("No encontrado")

  const getResultsFiltered = (results) =>{
      const resultFiltered=[];
      results.forEach(element => {
         const components = element.address_components;
         let distritos = components.filter((component => component.types.includes("locality")));
         let distritoSelected = distritos.length > 0 ? distritos[0] : components.filter((component => component.types.includes("sublocality"))).length>0 ? components.filter((component => component.types.includes("sublocality")))[0] : {};
         if (distritoSelected.long_name !== "Cercado de Lima" && distritoSelected.long_name !== "Lima" )
          resultFiltered.push(element);
      });
      return resultFiltered.length > 0 ? resultFiltered[0]:results[0];

  }

  React.useEffect(()=>{

    async function searchFunction(productDepartment, productProvince, productDistrict){

      if (props.listDepartments.length>0){
        var provinceSelected;
        var disctrictSelected;
        var departmentSelected = props.listDepartments.filter((departamento => productDepartment.toUpperCase().includes(departamento.departamento)))[0];

        if (departmentSelected === undefined) {
          departmentSelected = props.listDepartments[0];
          provinceSelected = departmentSelected.provincias[0]
          disctrictSelected = provinceSelected.distritos[0]
        }

        else {
        
          provinceSelected = departmentSelected.provincias.filter((provincia => productProvince.toUpperCase().includes(provincia.provincia)))[0];
    
          if (provinceSelected === undefined) {
            provinceSelected = departmentSelected.provincias[0]
            disctrictSelected = provinceSelected.distritos[0]
          }

          else {
          
            disctrictSelected = provinceSelected.distritos.filter((district => productDistrict.toUpperCase().includes(district.distrito)))[0];
      
            if (disctrictSelected === undefined) {
              disctrictSelected = provinceSelected.distritos[0]
            }

          }
        }

        setDistritoBuscado(disctrictSelected.distrito)

        var results = await search( 1, 
          location.state.productBrand, location.state.productLab,
          location.state.productOption, location.state.productVersion,
          departmentSelected.departamento, provinceSelected.provincia, disctrictSelected.distrito);    
        setListProductOptions(results);

      }
      
    }
  
      if(location.state.geolocation && props.isGeolocationAvailable && props.isGeolocationEnabled && props.coords){
        axios.get(
            apiGoogleUrl + props.coords.latitude + "," + props.coords.longitude + apiGoogleKey
        )
        .then( response => {
            //filter when the result is cercado de Lima
            let result = getResultsFiltered(response.data.results);     
            
            let components = result.address_components;

            const productDepartment = components.filter((component => component.types.includes("administrative_area_level_1")))[0]
            
            const productProvince = components.filter((component => component.types.includes("administrative_area_level_2")))[0]

            let distritos = components.filter((component => component.types.includes("locality")))

            
            const productDistrict = distritos.length > 0 ? distritos[0] : components.filter((component => component.types.includes("sublocality"))).length>0 ? components.filter((component => component.types.includes("sublocality")))[0] : {}
            setDistrito(productDistrict)

            searchFunction(productDepartment.long_name, productProvince.long_name, productDistrict.long_name);
        })
        .catch(e => {
            console.warn(e)
        })
      }

  }, [props, location])

  async function search( pageNumber, 
    productBrand, productLab,
    productOption, productVersion,
    productDepartment, productProvince, productDistrict) {
    var results = [];
    await services
      .searchProductPricesByLocal(pageNumber, 1000,
        productBrand, productLab,
        productOption, productVersion,
        productDepartment, productProvince, productDistrict,
        )
      .then((response) => {
        results = response.data.locales ? response.data.locales : [];
      })
      .catch((e) => {
        console.log(e);
      });

    return results;
  }

  const locationsMap = () => {
    return listProductOptions.map((item, index)=>{
      return(      
        <ItemLocal 
          title={item.nombreComercial} 
          subtitle={item.direccion} 
          price={item.precio}  
          key={index}                   
        />
      )
    })
  }

  return (
    <div className="store-results-container">
      {!location.state.geolocation ? (
        <div>
          <TitleContainer product={location.state.productBrand}  quantity={location.state.productOption}  concentration={location.state.productVersion}/>
          <div className="container">
            <p className="p-text">Resultados en <span>{location.state.productDistrict}</span>.</p>
          </div>
          <div className="items-container">  
            {locationsMap()}
          </div>
        </div>
      )
        : !props.isGeolocationAvailable ? (
        <div className="container">
          <p className="p-text">Tu navegador no soporta la geolocalización.</p>
        </div>
      ) : !props.isGeolocationEnabled ? (
        <div className="container">
          <p className="p-text">La geolocalización no está activada.</p>
        </div>
      ) : props.coords ? (
        <div>
          <div className="container">
            {distrito.long_name && distritoBuscado && distrito.long_name.toUpperCase() !== distritoBuscado.toUpperCase() && distritoBuscado !== "No Encontrado" ? (
              <>
                <p className="p-text">No se encontraron resultados en <span>{distrito.long_name}</span></p>
                <p className="p-text">Se muestran los resultados en <span>{distritoBuscado}</span></p>
              </>
            )
            :
            (
              <p className="p-text">Resultados en <span>{distrito.long_name}</span></p>
            )}
          </div>
          <div className="items-container">  
            {locationsMap()}
          </div>
        </div>
      ) : (
        <div className="container">
          <p className="p-text">Obteniendo datos de su ubicación&hellip;</p>
        </div>
      )}
    </div>
  );
};


StoreResult.propTypes = { ...StoreResult.propTypes, ...geoPropTypes };

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(StoreResult);
