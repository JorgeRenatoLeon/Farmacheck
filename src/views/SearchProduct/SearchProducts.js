import React from "react";
import TitleContainer from "../../components/TitleContainer/TitleContainer";
import DropdownCard from "../../components/DropdownCard/DropdownCard";
import CommentsCard from "../../components/CommentsCard/CommentsCard";
import { useHistory, useLocation } from "react-router";
import * as ROUTES from "../../routes/routes";
import services from "../../services/apiProduct";
import SeeMoreButton from "../../components/SeeMoreButton/SeeMoreButton";

import './searchProducts.scss';
import '../viewsStyle.scss';

const SearchProduct = () => {
  const history = useHistory();
  const location = useLocation();

  const [page, setPage] = React.useState(1);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    
    async function iniSearch(){
      var results = await search(location.state.product, 1);
      setListProductOptions(results);
    }
    if(location.state === undefined || location.state.product === undefined)
      history.push(ROUTES.HOME);
    else iniSearch();
    
  }, [location, history]);
  
  async function search(word, pageNumber) {
    var results = []
    await services
      .searchProductDetails(pageNumber, 5, word)
      .then((response) => {
        setTotal(response.data.total);
        results = response.data.presentaciones ? response.data.presentaciones : [];
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
  
  const [listProductOptions, setListProductOptions] = React.useState([]);

  const handleClickItem = (productOption, productVersion) => {
    var routeState = {
      product: location.state.product,
      productOption,
      productVersion
    }
    history.push(ROUTES.PRODUCTRESULT, routeState);
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
    <div className="search-products-details-container">
      <TitleContainer product={location.state === undefined || location.state.product === undefined ? '' : location.state.product}/>
      <div className="content-container">
        <div className="results-info">
          {"Total de resultados: " + total}
        </div>
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
          <SeeMoreButton title="Ver m??s" clickFunction={moreResults} visible={visible( listProductOptions.length===0 || listProductOptions.length===total)}/>
        <CommentsCard/>
      </div>

    </div>
  );
};

export default SearchProduct;