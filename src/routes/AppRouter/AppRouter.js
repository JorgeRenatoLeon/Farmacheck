import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import * as ROUTES from "../routes";
import Home from "../../views/Home/Home";
import Search from "../../views/Search/Search";
import ProductResult from "../../views/ProductResult/ProductResult";
import SearchProduct from "../../views/SearchProduct/SearchProducts";
import StorePlaces from "../../views/StorePlaces/StorePlaces";
import StoreResult from "../../views/StoreResult/StoreResult";
import TermsAndConditions from "../../views/TermsAndConditions/TermsAndConditions";

const AppRouter = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={ROUTES.HOME} component={Home}/>
                <Route exact path={ROUTES.TERMSANDCONDITIONS} component={TermsAndConditions}/>
                <Route exact path={ROUTES.SEARCH} component={Search}/>
                <Route exact path={ROUTES.PRODUCTRESULT} component={ProductResult}/>
                <Route exact path={ROUTES.SEARCHPRODUCTS} component={SearchProduct}/>
                <Route exact path={ROUTES.STOREPLACES} component={StorePlaces}/>
                <Route exact path={ROUTES.STORERESULT} component={StoreResult}/>
                <Redirect from="/" to={ROUTES.HOME} />
            </Switch>
        </BrowserRouter>
    );
}

export default AppRouter;