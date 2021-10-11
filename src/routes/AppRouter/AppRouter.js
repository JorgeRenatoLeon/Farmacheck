import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import * as ROUTES from "../routes";
import Home from "../../views/Home/Home";
import Splashscreen from "../../views/Splashscreen/Splashscreen";
import ProductResult from "../../views/ProductResult/ProductResult";
import SearchProduct from "../../views/SearchProduct/SearchProducts";

const AppRouter = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={ROUTES.HOME} component={Home}/>
                <Route exact path={ROUTES.SPLASHSCREEN} component={Splashscreen}/>
                <Route exact path={ROUTES.PRODUCTRESULT} component={ProductResult}/>
                <Route exact path={ROUTES.SEARCHPRODUCTS} component={SearchProduct}/>
                <Redirect from="/" to={ROUTES.HOME} />
            </Switch>
        </BrowserRouter>
    );
}

export default AppRouter;