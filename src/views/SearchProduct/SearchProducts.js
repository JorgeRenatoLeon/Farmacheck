import React from "react";
import TitleContainer from "../../components/TitleContainer/TitleContainer";
import DropdownCard from "../../components/DropdownCard/DropdownCard";
import CommentsCard from "../../components/CommentsCard/CommentsCard";

const SearchProduct = () => {
  
  const [listProductOptions, setListProductOptions] = React.useState([
    {
      presentacion: "Tableta",
      concentraciones: [
        {
          concentracion: "120 mg"
        },
        {
          concentracion: "90 mg"
        },
        {
          concentracion: "60 mg"
        },
      ]
    },
    {
      presentacion: "Inyectable",
      concentraciones: [
        {
          concentracion: "120 mg"
        },
        {
          concentracion: "90 mg"
        },
        {
          concentracion: "60 mg"
        },
      ]
    }
  ]);

  return (
    <>
      <TitleContainer title="Arcoxia"/>
        {listProductOptions.map((productOption, index)=>{
          return (
            <DropdownCard 
              key={"cardPV-"+index}
              title={productOption.presentacion}
              listProductVersions={productOption.concentraciones}
            />
          );
        })}
      <CommentsCard/>
    </>
  );
};

export default SearchProduct;