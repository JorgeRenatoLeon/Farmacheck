import React from "react";
import './locationsTabs.scss';

const LocationTabs = (props) => {
    const {changeTab} = props;
    return (
        <>
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" onClick={()=>changeTab("firstOp")} href="#firstOp">
                    Mi Ubicación
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" onClick={()=>changeTab("secondOp")} href="#secondOp">
                    Otra Ubicación
                </a>
            </li>
        </ul>
        </>
    );
};

export default LocationTabs;