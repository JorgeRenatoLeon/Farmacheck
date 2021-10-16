import React from "react";
import './selectDropdown.scss';

const SelectDropdown = (props) => {
  
  const {selectName, idSelected, listItems, handleClickList} = props;
  const [show, setShow] = React.useState(false);

  const handleClick = () => {
    const showNow = show;
    setShow(!showNow);
  }

  return (                  
    <div class="accordion dropdown-product" id={"accordion-"+idSelected}>
        <div class="accordion-item ">
            <h2 class="accordion-header" id={"headingOne"+idSelected}>
                <button 
                    class={show?"accordion-button dropdown-container":"accordion-button collapsed dropdown-container"} 
                    onClick={handleClick} 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target={"#collapseOne-"+idSelected} 
                    aria-expanded={show?"true":"false"} 
                    aria-controls={"collapseOne-"+idSelected} 
                >
                    {idSelected>=0?listItems[idSelected].name:selectName}
                </button>
            </h2>
            <div id={"collapseOne-"+idSelected}  
                class={show?"accordion-collapse collapse show":"accordion-collapse collapse" }
                aria-labelledby={"headingOne"+idSelected} 
                data-bs-parent={"#accordion-"+idSelected}>
                <div className="accordion-body">
                    <ul class="list-group">
                    {
                    listItems.map((item, index)=>{
                        return (
                            <li class="list-group-item" onClick={()=>handleClickList(item.id)} key={"concentracion-"+index}>
                                <strong>{item.name}</strong>
                            </li>
                        );
                    })
                    }
                    </ul>
                </div>
            </div>
        </div>        
    </div>
  );
};

export default SelectDropdown;