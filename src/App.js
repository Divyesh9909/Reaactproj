import React, { useEffect, useState } from "react";
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
  let pId;

  const [product, setproduct] = useState(null);

  const SingleProductPageId = (pid) => {
    if (pid) {
      pId = pid;
      console.log("pid ", pid);
    }
  };

  useEffect(() => {
    // console.log("Product 1234", product);
  }, [product]);

  return (
    <Router>
      <div className="App">
        <Header />
        <div style={{ minHeight: "70vh" }}>
          <Switch>
            <Route exact path={["/", "/Home"]}>
              <Home />
            </Route>
            <Route path="/Articles">
              <Article
                SingleProductPageId={SingleProductPageId}
                setproduct={setproduct}
              />
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
              <Cart pId={pId} />
            </Route>
            <Route path="/Registration">
              <Registration />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
            <Route path="/SingleProductPage/:pid">
              <SingleProductPage
                SingleProductPageId={SingleProductPageId}
                product={product}
              />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
