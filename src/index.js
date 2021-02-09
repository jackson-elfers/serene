import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux";
import "./styles";
import {
  Home,
  Menu,
  Account,
  Login,
  Logout,
  Register,
  UpdatePassword,
  Unregister,
  Recover,
  Verify,
  NotFound,
} from "./pages";
import { Header, Footer, Scroll, SetUser, Notice } from "./components";
import { routes } from "./config";
import * as serviceWorker from "./serviceWorker";

const routing = (
  <Provider store={store}>
    <Router>
      <SetUser />
      <Scroll>
        <Header />
        <Notice>
          <Switch>
            <Route exact path={routes.Home} component={Home} />
            <Route exact path={routes.Menu} component={Menu} />
            <Route exact path={routes.Account} component={Account} />
            <Route exact path={routes.Login} component={Login} />
            <Route exact path={routes.Logout} component={Logout} />
            <Route exact path={routes.Register} component={Register} />
            <Route exact path={routes.UpdatePassword} component={UpdatePassword} />
            <Route exact path={routes.Unregister} component={Unregister} />
            <Route exact path={routes.Recover} component={Recover} />
            <Route exact path={routes.Verify} component={Verify} />
            <Route component={NotFound} />
          </Switch>
        </Notice>
        <Footer />
      </Scroll>
    </Router>
  </Provider>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
