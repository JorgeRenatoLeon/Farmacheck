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
    <div className="accordion" id={"accordion-"+title}>
        <div className="accordion-item">
            <h2 className="accordion-header" id={"headingOne"+title}>
                <button 
                    className={"accordion-button " + show?"":"collapsed"} 
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
                className={"accordion-collapse collapse " + show?"show":"" }
                aria-labelledby={"headingOne"+title} 
                data-bs-parent={"#accordion-"+title}>
                <div className="accordion-body">
                    {
                    listProductVersions.map((productVersion, index)=>{
                        return (
                            <span key={"concentracion-"+index}>
                                <strong>{productVersion.concentracion}</strong>
                            </span>
                        );
                    })
                    }
                </div>
            </div>
        </div>        
    </div>
  );
};

export default DropdownCard;