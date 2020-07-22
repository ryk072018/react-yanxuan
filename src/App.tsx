import React from "react";
// 路由
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from './pages/Navigation'
import "./App.scss";

// 组件
import Home from "./pages/Home";
import GoodsList from "./pages/GoodsList";
import Favorite from "./pages/Favorite";
import ShoppingCart from "./pages/ShoppingCart";
import Users from "./pages/Users";



function App() {

  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/GoodsList">
              <GoodsList />
            </Route>
            <Route path="/Favorite">
              <Favorite />
            </Route>
            <Route path="/ShoppingCart">
              <ShoppingCart />
            </Route>
            <Route path="/Users">
              <Users />
            </Route>
          </Switch>
          {/* 底部導航 */}
          <Navigation />
        </div>
      </Router>

    </div>
  );
}

export default App;
