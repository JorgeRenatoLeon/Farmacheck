import React from "react";
import TitleContainer from "../../components/TitleContainer/TitleContainer";
import ItemProduct from "../../components/ItemProduct/ItemProduct";
import CommentsCard from "../../components/CommentsCard/CommentsCard";
import SeeStoreButton from "../../components/SeeStoreButton/SeeStoreButton";
import SeeMoreButton from "../../components/SeeMoreButton/SeeMoreButton";
import "./productResult.scss";
import { useHistory, useLocation } from "react-router";
import services from "../../services/apiProduct";
import * as ROUTES from "../../routes/routes";

const ProductResult = () => {
  const history = useHistory();
  const [listProductOptions, setListProductOptions] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const location = useLocation();

  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    if(location.state === undefined || location.state.product === undefined || location.state.productOption === undefined || location.state.productVersion === undefined) 
      history.push(ROUTES.SEARCH);
    else
      iniSearch();
  }, [location, history]);

  async function iniSearch(){
    var results = await search(location.state.product, location.state.productOption, location.state.productVersion, 1);
    console.log(results)
    setListProductOptions(results);
  }
  
  async function search(product, productOption, productVersion, pageNumber) {
    var results = []
    await services
      .searchProductPrices(pageNumber, 3, product, productOption, productVersion)
      .then((response) => {
        setTotal(response.data.total);
        results = response.data.precios ? response.data.precios : [];
      })
      .catch((e) => {
        console.log(e);
      });
    return results;
  }

  async function moreResults(){
    var newPage = await search(location.state.product, page + 1 );
    setPage(page+1)
    setListProductOptions(listProductOptions.concat(newPage))
  }

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
    <div className="products-results-container">
      <TitleContainer
        product={location.state === undefined || location.state.product === undefined ? '' : location.state.product}
        quantity={location.state === undefined || location.state.productOption === undefined ? '' : location.state.productOption}
        concentration={location.state === undefined || location.state.productVersion === undefined ? '' : location.state.productVersion}
      />
      <div className="text-first">
        {"Total de resultados: " + total}
      </div>
      <div className="text-secondary">
        *Precios promedio referenciales
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
      <SeeMoreButton title="Ver más" clickFunction={moreResults} visible={visible( listProductOptions.length===0 || listProductOptions.length===total)}/>
      <CommentsCard/>
    </div>
  );
};

export default ProductResult;
