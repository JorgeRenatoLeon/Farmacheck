import React from "react";
import TitleContainer from "../../components/TitleContainer/TitleContainer";
import ItemProduct from "../../components/ItemProduct/ItemProduct";
import CommentsCard from "../../components/CommentsCard/CommentsCard";

const ProductResult = () => {
  
  const [listProductOptions, setListProductOptions] = React.useState([
    {
      laboratorio: "Merc Sharp",
      marca: "Arcoxia",
      precio: 8.27,

    },
    {
      laboratorio: "Perulab",
      marca: "Exotib",
      precio: 8.00,
    }
  ]);

  return (
    <>
      <TitleContainer product="Arcoxia"  quantity="90mg"  concentration="Tableta"/>
      {listProductOptions.map((item)=>{
        return(
          <ItemProduct 
            title={item.marca} 
            subtitle={item.laboratorio} 
            price={item.precio}/>
        )
      })}
      <CommentsCard/>

    </>
  );
};

export default ProductResult;
