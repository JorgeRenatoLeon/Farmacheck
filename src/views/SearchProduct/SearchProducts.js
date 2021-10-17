import React from "react";
import TitleContainer from "../../components/TitleContainer/TitleContainer";
import DropdownCard from "../../components/DropdownCard/DropdownCard";
import CommentsCard from "../../components/CommentsCard/CommentsCard";
import { useHistory, useLocation } from "react-router";
import * as ROUTES from "../../routes/routes";
import services from "../../services/apiProduct";
import SeeMoreButton from "../../components/SeeMoreButton/SeeMoreButton";

const SearchProduct = () => {
  const history = useHistory();
  const location = useLocation();

  const [page, setPage] = React.useState(1);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    if(location.state === undefined || location.state.product === undefined) history.push(ROUTES.SEARCH);
    else iniSearch();
  }, [location, history]);

  async function iniSearch(){
    var results = await search(location.state.product, 1);
    console.log(results)
    setListProductOptions(results);
  }
  
  async function search(word, pageNumber) {
    var results = []
    await services
      .searchProductDetails(pageNumber, 10, word)
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
    <>
      <TitleContainer product={location.state === undefined || location.state.product === undefined ? '' : location.state.product}/>
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
        <SeeMoreButton title="Ver más" clickFunction={moreResults} visible={visible( listProductOptions.length===0 || listProductOptions.length===total)}/>
      <CommentsCard/>
    </>
  );
};

export default SearchProduct;