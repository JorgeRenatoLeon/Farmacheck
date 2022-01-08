import React, {useState} from "react";
import './searchBox.scss';

const SearchBox = (props) => {
  const {searchMed} = props;
  
  const [searchValue, setSearchValue] = useState("");
  const [openList, setOpenList] = useState(false);
  const [resultsList, setResultsList] = useState(["Result 1", "Result 2", "Result 3"]);

  const searchMedicine = (e) => {
    const searchResult = e.target.value;
    //call service to search
    setSearchValue(e.target.value);
    //set results list
    if (searchResult.length > 0)
      setOpenList(true);
    else
      setOpenList(false);

  }

  return (      
    <div class="input-search">
      <div className="input-group">
        <input 
          type="search"
          class="form-control search-box" 
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
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        {resultsList.map((result)=>{
          return(
            <li class="dropdown-item" onClick={searchMed}>{result}</li>
          )
        })}        
      </ul>}
    </div>
  );
};

export default SearchBox;