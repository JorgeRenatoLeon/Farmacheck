import React from "react";
import './locationsTabs.scss';

const LocationTabs = (props) => {
    const {tabOption, changeTab} = props;
    return (
        <>
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class={tabOption==="firstOp"?"nav-link active":"nav-link"} aria-current="page" onClick={()=>changeTab("firstOp")}>
                    Mi Ubicación
                </a>
            </li>
            <li class="nav-item">
                <a class={tabOption==="secondOp"?"nav-link active":"nav-link"} onClick={()=>changeTab("secondOp")}>
                    Otra Ubicación
                </a>
            </li>
        </ul>
        </>
    );
};

export default LocationTabs;