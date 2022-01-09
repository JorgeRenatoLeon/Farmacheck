import React from "react";
import './dropdownCard.scss';
const DropdownCard = (props) => {
  
  const {title, listProductVersions, handleClickItem} = props;
  const [show, setShow] = React.useState(false);

  const handleClick = () => {
    const showNow = show;
    setShow(!showNow);
  }

  return (                  
    <div className="accordion dropdown-product" id={"accordion-"+title}>
        <div className="accordion-item ">
            <h2 className="accordion-header" id={"headingOne"+title}>
                <button 
                    className={show?"accordion-button dropdown-container":"accordion-button collapsed dropdown-container"} 
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
                className={show?"accordion-collapse collapse show":"accordion-collapse collapse" }
                aria-labelledby={"headingOne"+title} 
                data-bs-parent={"#accordion-"+title}>
                <div className="accordion-body">
                    <ul className="list-group">
                    {
                    listProductVersions.map((productVersion, index)=>{
                        return (
                            <li className="list-group-item" key={"concentracion-"+index} onClick={() => { handleClickItem(title, productVersion.concentracion)}}>
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