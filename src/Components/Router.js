import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,


} from "react-router-dom";
import Admin from "./Admin";
import Cart from "./Cart";
import Category from "./Category";
import Home from "./Home";
import Search from "./Search";



export default function App() {
  return (
    <Router>
      <div>
        
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/product/cat/:id/:name">
            <Category />
          </Route>
          <Route path="/search/:name">
            <Search/>
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/admin">
            <Admin/>
          </Route>
         
         
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}