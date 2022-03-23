import React, { useState } from "react";
//import logo from './logo.svg';
import Home from "./components/Home";
import Article from "./components/Articles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Product from "./components/Product";
import Footer from "./components/Footer";
import Men from "./components/Men";
import Women from "./components/Women";
import Kids from "./components/Kids";
import Registration from "./components/Registration";
import Cart from "./Cart";
import Login from "./components/Login";
import SingleProductPage from "./components/SingleProductPage";

function App() {
  const [setState] = useState;
  const SingleProductPageId = (pid) => {
    setState({
      content: pid,
    });
  };
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Articles">
            <Article SingleProductPageId={SingleProductPageId} />
          </Route>
          <Route path="/Product">
            <Product />
          </Route>
          <Route path="/Men">
            <Men />
          </Route>
          <Route path="/Women">
            <Women />
          </Route>
          <Route path="/Kids">
            <Kids />
          </Route>
          <Route path="/Cart">
            <Cart />
          </Route>
          <Route path="/Registration">
            <Registration />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/SingleProductPage">
            <SingleProductPage
              contentSetter={SingleProductPageId}
              pid={setState.content}
            />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
