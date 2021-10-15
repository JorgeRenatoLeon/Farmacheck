import React from "react";
import TitleContainer from "../../components/TitleContainer/TitleContainer";
import DropdownCard from "../../components/DropdownCard/DropdownCard";
import CommentsCard from "../../components/CommentsCard/CommentsCard";
import { useHistory } from "react-router";
import * as ROUTES from "../../routes/routes";

const SearchProduct = () => {
  const history = useHistory();
  
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
  const handleClickItem = () => {
    history.push(ROUTES.PRODUCTRESULT);
  }

  return (
    <>
      <TitleContainer product="Arcoxia"/>
        {listProductOptions.map((productOption, index)=>{
          return (
            <DropdownCard 
              key={"cardPV-"+index}
              title={productOption.presentacion}
              listProductVersions={productOption.concentraciones}
              handleClickItem={handleClickItem}
            />
          );
        })}
      <CommentsCard/>
    </>
  );
};

export default SearchProduct;