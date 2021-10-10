import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import * as ROUTES from "../routes";
//import Home from "../../views/Home";
import App from "../../App";
import ProductResult from "../../views/ProductResult/ProductResult";
import SearchProduct from "../../views/SearchProduct/SearchProducts";

const AppRouter = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={ROUTES.HOME} component={App}/>
                <Route exact path={ROUTES.PRODUCTRESULT} component={ProductResult}/>
                <Route exact path={ROUTES.SEARCHPRODUCTS} component={SearchProduct}/>
                <Redirect from="/" to={ROUTES.HOME} />
            </Switch>
        </BrowserRouter>
    );
}

export default AppRouter;