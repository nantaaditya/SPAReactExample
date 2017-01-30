import React from "react";        //plugin
import ReactDOM from "react-dom"; //plugin
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import Layout from "./component/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";


const app = document.getElementById('app');
ReactDOM.render(
<Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="Product" name="product" component={Products}></Route>
      <Route path="About" name="About" component={About}></Route>
      <Route path="Detail/:id" name="Detail"></Route>
    </Route>
  </Router>, app);
