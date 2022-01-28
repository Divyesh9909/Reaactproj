import React from "react";
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
import Login from "./components/Login";
import Question from "./Cart";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Articles">
            <Article />
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
          <Route path="/Question">
            <Question />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
