import React from "react";
import './dropdownCard.scss';
const DropdownCard = (props) => {
  
  const {title, listProductVersions} = props;
  const [show, setShow] = React.useState(false);

  const handleClick = () => {
    const showNow = show;
    setShow(!showNow);
  }

  return (                  
    <div class="accordion dropdown-product" id={"accordion-"+title}>
        <div class="accordion-item ">
            <h2 class="accordion-header" id={"headingOne"+title}>
                <button 
                    class={show?"accordion-button dropdown-container":"accordion-button collapsed dropdown-container"} 
                    onClick={handleClick} 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target={"#collapseOne-"+title} 
                    aria-expanded={show?"true":"false"} 
                    aria-controls={"collapseOne-"+title} 
                >
                    {title}
                </button>
            </h2>
            <div id={"collapseOne-"+title}  
                class={show?"accordion-collapse collapse show":"accordion-collapse collapse" }
                aria-labelledby={"headingOne"+title} 
                data-bs-parent={"#accordion-"+title}>
                <div className="accordion-body">
                    <ul class="list-group">
                    {
                    listProductVersions.map((productVersion, index)=>{
                        return (
                            <li class="list-group-item" key={"concentracion-"+index}>
                                <strong>{productVersion.concentracion}</strong>
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

export default DropdownCard;