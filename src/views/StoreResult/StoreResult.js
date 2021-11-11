import React from "react";
import TitleContainer from "../../components/TitleContainer/TitleContainer";
import ItemProduct from "../../components/ItemProduct/ItemProduct";
import CommentsCard from "../../components/CommentsCard/CommentsCard";
import './storeResult.scss';
import services from "../../services/apiProduct";

const StoreResult = () => {
  
  const [listProductOptions, setListProductOptions] = React.useState([
    {
      direccion: "Av. aviación N 5460",
      marca: "Arcoxia",
      precio: 8.27,

    },
    {
      direccion: "Av. aviación N 5460",
      marca: "Exotib",
      precio: 8.00,
    }
  ]);
  const [district, setDistrict] = React.useState("San Borja")

  const handleClick = () => {
    console.log("hola");
  }

  return (
    <>
      <TitleContainer product="Arcoxia"  quantity="90mg"  concentration="Tableta"/>
      <div className="container">
        <p className="p-text">Resultados en <span>{district}</span></p>
      </div>
      {listProductOptions.map((item)=>{
        return(
          <>          
          <ItemProduct 
            title={item.marca} 
            subtitle={item.direccion} 
            price={item.precio}                     
          />
          </>
        )
      })}
      <CommentsCard/>
    </>
  );
};

export default StoreResult;
