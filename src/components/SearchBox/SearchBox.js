import React, {useState} from "react";
import './searchBox.scss';
import { useHistory } from "react-router";
import * as ROUTES from "../../routes/routes";
import services from "../../services/apiProduct";

const SearchBox = (props) => {
  const {searchMed} = props;
  
  const [searchValue, setSearchValue] = useState("");
  const [openList, setOpenList] = useState(false);
  const [resultsList, setResultsList] = useState([]);
  const history = useHistory();
  
  async function search(word, pageNumber) {
      var results = []
      await services
        .searchProducts(pageNumber, 5, word)
        .then((response) => {
            results = response.data.productos ? response.data.productos : [];
        })
        .catch((e) => {
            console.log(e);
        });
      return results;
  }

  async function  handleSearch(word){
      if(word.length >= 3){
          var results = await search(word, 1);
          setResultsList(results.slice(0,3));
          setOpenList(true);
      }
  }

  function goToDetails(product){
      history.push(ROUTES.SEARCHPRODUCTS, {product: product});
  }

  const searchMedicine = (e) => {
    const searchResult = e.target.value;
    //call service to search
    setSearchValue(e.target.value);
    //set results list
    if (searchResult.length >= 3) {
      handleSearch(searchResult)
    }
    else
      setOpenList(false);

  }

  return (      
    <div className="input-search">
      <div className="input-group">
        <input 
          type="search"
          className="form-control search-box" 
          placeholder="Busca por nombre comercial o genérico" 
          value={searchValue}
          onChange={(e)=>searchMedicine(e)}
          id="dropdownMenuButton1"           
        />
        <span className="input-group-text" onClick={searchMed}>
          <i className="bi-search input-icon"></i>
        </span>
      </div>
      {openList && 
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        {resultsList.map((result, index)=>{
          return(
            <li key={index} className="dropdown-item" onClick={() => { goToDetails(result.producto) } }>{result.producto}</li>
          )
        })}        
      </ul>}
    </div>
  );
};

export default SearchBox;