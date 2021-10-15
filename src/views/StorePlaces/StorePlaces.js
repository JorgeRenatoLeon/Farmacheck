import React from "react";
import TitleContainer from "../../components/TitleContainer/TitleContainer";
import SelectDropdown from "../../components/SelectDropdown/SelectDropdown";
import CommentsCard from "../../components/CommentsCard/CommentsCard";
import SeeMoreButton from "../../components/SeeMoreButton/SeeMoreButton";

const StorePlaces = () => {
  const [selectedDepartment, setSelectedDepartment]  = React.useState(-1);
  const [selectedProvince, setSelectedProvince]  = React.useState(-1);
  const [selectedDistrict, setSelectedDistrict]  = React.useState(-1);  
  const [listDepartments, setListDepartments] = React.useState([
    {
      id: 0,
      name: "DepaLala",
      province: [
        {
          id: 0,
          name: "ProvinciaLala1",
          districts: [
              {
                id: 0,
                name:"distritoLala1-1"
              },
              {
                id: 1,
                name:"distritoLala1-2"
              },
          ]
        },
        {
            id: 1,
            name: "ProvinciaLala2",
            districts: [
                {
                  id: 0,
                  name:"distritoLala2-1"
                },
                {
                  id: 1,
                  name:"distritoLala2-2"
                },
            ]
          }
        
      ]
    },
    {
        id: 1,
        name: "DepaLala2",
        province: [
          {
            id: 0,
            name: "ProvinciaLala2-2",
            districts: [
                {
                  id: 0,
                  name:"distritoLala2-2-1"
                },
            ]
          },
          
        ]
      },
  ]);

  const handleClick = () => {
      console.log("aceptar");
  }
  return (
    <>
      <TitleContainer product="Lugares de compra"/>
      <div className="container">
        <p className="p-text">Para mayor precisión sobre los lugares de compra, por favor completa la siguiente información </p>
      </div>
      <SelectDropdown 
        selectName="Departamento"
        idSelected={selectedDepartment} 
        listItems={listDepartments}
        handleClickList={setSelectedDepartment}/>        
      <SelectDropdown 
        selectName="Provincia"
        idSelected={selectedProvince} 
        listItems={selectedDepartment>=0?listDepartments[selectedDepartment].province:[]}
        handleClickList={setSelectedProvince}/>
      <SelectDropdown 
        selectName="Distrito"
        idSelected={selectedDistrict} 
        listItems={selectedProvince>=0?listDepartments[selectedDepartment].province[selectedProvince].districts:[]}
        handleClickList={setSelectedDistrict}/>
      <SeeMoreButton title="Aceptar" clickFunction={handleClick} disabled={false}/>
      <CommentsCard/>
    </>
  );
};

export default StorePlaces;