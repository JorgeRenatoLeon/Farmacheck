import React from "react";
import TitleContainer from "../../components/TitleContainer/TitleContainer";
import SelectDropdown from "../../components/SelectDropdown/SelectDropdown";
import CommentsCard from "../../components/CommentsCard/CommentsCard";
import SeeMoreButton from "../../components/SeeMoreButton/SeeMoreButton";
import { useHistory, useLocation } from "react-router";
import * as ROUTES from "../../routes/routes";
import services from "../../services/apiProduct";

import './storePlaces.scss';

const StorePlaces = () => {
  const history = useHistory();
  const location = useLocation();
  const [selectedDepartment, setSelectedDepartment]  = React.useState("");
  const [selectedProvince, setSelectedProvince]  = React.useState("");
  const [listProvincesSelected, setListProvincesSelected] = React.useState([]);
  const [selectedDistrict, setSelectedDistrict]  = React.useState("");  
  const [listDistrictsSelected, setListDistrictsSelected] = React.useState([]);
  const [listDepartments, setListDepartments] = React.useState([]);

  React.useEffect(() => {
    if(location.state === undefined || location.state.productOption === undefined || location.state.productVersion === undefined) 
      history.push(ROUTES.SEARCH);
    else
      iniSearch();
  }, [location, history]);

  async function iniSearch(){
    var results = await search( location.state.productOption, location.state.productVersion, 1, location.state.productBrand, location.state.productLab);    
    setListDepartments(results);
  }

  async function search( productOption, productVersion, pageNumber, brand, lab) {
    var results = [];
    await services
      .searchProductPricesByDistricts(pageNumber, 1000, brand, lab, productOption, productVersion)
      .then((response) => {
        results = response.data.departamentos ? response.data.departamentos : [];
      })
      .catch((e) => {
        console.log(e);
      });

    return results;
  }

  const changeListProvinces = (nameDepartment) => {
    setSelectedDepartment(nameDepartment);
    const listProvinces = listDepartments.find((department)=>department.departamento===nameDepartment).provincias;
    setListProvincesSelected(listProvinces);
    setListDistrictsSelected([]);
  }

  const changeListDistricts = (nameProvince) => {
    setSelectedProvince(nameProvince);
    const listDistricts = listProvincesSelected.find((province)=>province.provincia===nameProvince).distritos;
    setListDistrictsSelected(listDistricts);
  }

  const handleClick = () => {
    var routeState = {
      productOption: location.state.productOption,
      productVersion: location.state.productVersion,
      productBrand:location.state.productBrand,
      productLab: location.state.productLab,
      productDepartment: selectedDepartment,
      productDistrict : selectedDistrict,
      productProvince: selectedProvince,

    }
    history.push(ROUTES.STORERESULT, routeState);
  }
  return (
    <div className="store-places-container">
      <TitleContainer product="Lugares de compra"/>
      <div className="container">
        <p className="p-text">Para mayor precisión sobre los lugares de compra, por favor completa la siguiente información </p>
      </div>
      {listDepartments.length>0?
      <SelectDropdown 
        selectName="Departamento"
        nameSelected={selectedDepartment} 
        listItems={listDepartments}
        handleClickList={changeListProvinces}/>:null}      
      {listProvincesSelected.length>0?
      <SelectDropdown 
        selectName="Provincia"
        nameSelected={selectedProvince} 
        listItems={listProvincesSelected}
        handleClickList={changeListDistricts}/>:null}
      {listDistrictsSelected.length>0?
      <SelectDropdown 
        selectName="Distrito"
        nameSelected={selectedDistrict} 
        listItems={listDistrictsSelected}
        handleClickList={setSelectedDistrict}/>:null}
      {selectedDistrict.length>0?
      <SeeMoreButton 
        title="Aceptar" 
        clickFunction={handleClick} 
        disabled={false}/>:null}
      <CommentsCard/>
    </div>
  );
};

export default StorePlaces;