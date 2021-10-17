import React from "react";
import TitleContainer from "../../components/TitleContainer/TitleContainer";
import ItemProduct from "../../components/ItemProduct/ItemProduct";
import CommentsCard from "../../components/CommentsCard/CommentsCard";
import SeeStoreButton from "../../components/SeeStoreButton/SeeStoreButton";
import "./productResult.scss";
import { useHistory } from "react-router";
import * as ROUTES from "../../routes/routes";

const ProductResult = () => {
  const history = useHistory();
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
  const [total, setTotal] = React.useState(0);

  const handleClick = () => {
    history.push(ROUTES.STOREPLACES);
  }

  function visible(statement){
    if(statement){
        return {
            display: "none"
        }
    }
    else return null
  }

  return (
    <>
      <TitleContainer product="Arcoxia"  quantity="90mg"  concentration="Tableta"/>
      <div className="results-info" style={visible(total===0)}>
        {"Total de resultados: " + total}
      </div>
      <div className="container">
        <p className="p-text">*Precios promedio referenciales</p>
      </div>      
      {listProductOptions.map((item)=>{
        return(
          <>          
          <ItemProduct 
            title={item.marca} 
            subtitle={item.laboratorio} 
            price={item.precio}/>
          {/*<SeeStoreButton clickFunction={handleClick} />*/}
          </>
        )
      })}
      <CommentsCard/>
    </>
  );
};

export default ProductResult;
