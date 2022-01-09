import React from "react";
import './selectDropdown.scss';

const SelectDropdown = (props) => {
  
  const {selectName, nameSelected, listItems, handleClickList} = props;
  const [show, setShow] = React.useState(false);

  const handleClick = () => {
    const showNow = show;
    setShow(!showNow);
  }

  return (                  
    <div class="accordion dropdown-product" id={"accordion-"+nameSelected}>
        <div class="accordion-item ">
            <h2 class="accordion-header" id={"headingOne"+nameSelected}>
                <button 
                    class={show?"accordion-button dropdown-container":"accordion-button collapsed dropdown-container"} 
                    onClick={handleClick} 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target={"#collapseOne-"+nameSelected} 
                    aria-expanded={show?"true":"false"} 
                    aria-controls={"collapseOne-"+nameSelected} 
                >
                    {nameSelected.length>0?nameSelected:selectName}
                </button>
            </h2>
            <div id={"collapseOne-"+nameSelected}  
                class={show?"accordion-collapse collapse show":"accordion-collapse collapse" }
                aria-labelledby={"headingOne"+nameSelected} 
                data-bs-parent={"#accordion-"+nameSelected}>
                <div className="accordion-body">
                    <ul class="list-group">
                    {
                    listItems.map((item, index)=>{
                        const name = Object.keys(item)[0];
                        return (
                            <li class="list-group-item" onClick={()=>{
                                    handleClickList(item[name]);
                                    handleClick();
                                }} key={"concentracion-"+index}>
                                <strong>{item[name]}</strong>
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