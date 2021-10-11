import React from "react";
// import { useHistory } from "react-router";
// import * as ROUTES from "../../routes/routes"; 

import './splashscreen.scss';

const Splashscreen = () => {
    // const history = useHistory();

    // setTimeout(() => {
    //     history.push(ROUTES.SEARCHPRODUCTS);
    // }, 3000);

    return (
        <div name="Splashscreen" className="splashscreen-container">
            <ul className="splashscreen-list">
                <li>
                    <strong>FarmaCheck</strong> es un buscador de precios referenciales de medicamentos que te ayudará a tomar una decisión de compra informada.
                </li>
                <li>
                    Los precios presentados corresponden al promedio reportado por boticas y farmacias.
                </li>
                <li>
                    Podrás ingresar el nombre comercial del medicamento o su genérico.
                </li>
                <li>
                    Encontrarás varias opciones de diferentes laboratorios.
                </li>
                <li>
                    FarmaCheck es una iniciativa de la
                    Asociación de EPS (APEPS) y la
                    Asociación Peruana de Empresas de
                    Seguros (APESEG) por brindar
                    información oportuna y transparente al
                    público que busca medicinas a
                    precios competitivos.
                </li>
            </ul>
        </div>
    );
}

export default Splashscreen;