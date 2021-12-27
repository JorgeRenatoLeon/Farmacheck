import React from "react";
import './searchBox.scss';

const SearchBox = (props) => {
  const {searchValue} = props;
  return (      
    <div class="row input-search">
      <div className="input-group">
        <input 
          type="text" 
          class="form-control search-box" 
          placeholder="Busca por nombre comercial o genérico" 
          value={searchValue}/>
        <span className="input-group-text">
          <i className="bi-search input-icon"></i>
        </span>
      </div>
    </div>   
  );
};

export default SearchBox;