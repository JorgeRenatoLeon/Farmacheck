import React from "react";
import './locationsTabs.scss';

const LocationTabs = (props) => {
    const {tabOption, changeTab} = props;
    return (
        <>
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <div className={tabOption==="firstOp"?"nav-link active":"nav-link"} aria-current="page" onClick={()=>changeTab("firstOp")}>
                    Mi Ubicación
                </div>
            </li>
            <li className="nav-item">
                <div className={tabOption==="secondOp"?"nav-link active":"nav-link"} onClick={()=>changeTab("secondOp")}>
                    Otra Ubicación
                </div>
            </li>
        </ul>
        </>
    );
};

export default LocationTabs;