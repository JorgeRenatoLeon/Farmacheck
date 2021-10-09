import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import * as ROUTES from "../routes";
//import Home from "../../views/Home";
import App from "../../App";

const AppRouter = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={ROUTES.HOME} component={App}/>
                <Redirect from="/" to={ROUTES.HOME} />
            </Switch>
        </BrowserRouter>
    );


}

export default AppRouter;