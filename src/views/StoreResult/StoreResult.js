import React from "react";
import TitleContainer from "../../components/TitleContainer/TitleContainer";
import ItemLocal from "../../components/ItemLocal/ItemLocal";
import CommentsCard from "../../components/CommentsCard/CommentsCard";
import './storeResult.scss';
import { useHistory, useLocation } from "react-router";
import * as ROUTES from "../../routes/routes";
import services from "../../services/apiProduct";

import './storeResult.scss';

const StoreResult = () => {
  const history = useHistory();
  const location = useLocation();
  
  const [listProductOptions, setListProductOptions] = React.useState([
    // {
    //   direccion: "Av. aviación N 5460",
    //   marca: "Arcoxia",
    //   precio: 8.27,

    // },
    // {
    //   direccion: "Av. aviación N 5460",
    //   marca: "Exotib",
    //   precio: 8.00,
    // }
  ]);
  const [district, setDistrict] = React.useState(location.state.productDistrict);

  React.useEffect(() => {
    if(location.state === undefined ||
      location.state.productOption === undefined ||
      location.state.productVersion === undefined ||
      location.state.productBrand === undefined ||
      location.state.productLab === undefined ||
      location.state.productDepartment === undefined ||
      location.state.productProvince === undefined ||
      location.state.productDistrict === undefined) 
      history.push(ROUTES.SEARCH);
    else
      iniSearch();
  }, [location, history]);

  async function iniSearch(){
    var results = await search( 1, 
      location.state.productBrand, location.state.productLab,
      location.state.productOption, location.state.productVersion,
      location.state.productDepartment, location.state.productProvince, location.state.productDistrict);    
    setListProductOptions(results);
  }

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

  const handleClick = () => {
    console.log("hola");
  }

  return (
    <div className="store-results-container">
      <TitleContainer product="Arcoxia"  quantity="90mg"  concentration="Tableta"/>
      <div className="container">
        <p className="p-text">Resultados en <span>{district}</span></p>
      </div>
      <div className="items-container">  
        {listProductOptions.map((item)=>{
          return(
            <>          
            <ItemLocal 
              title={item.nombreComercial} 
              subtitle={item.direccion} 
              price={item.precio}                     
            />
            </>
          )
        })}
      </div>
      <CommentsCard/>
    </div>
  );
};

export default StoreResult;
