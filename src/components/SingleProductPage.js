// import React from "react";

// class SingleProductPage extends React.Component {
//   render() {
//     return <h3> ☹️☹️☹️☹️ </h3>;
//   }
// }
// export default SingleProductPage;

import React, { useState, useEffect } from "react";
import "./Product.css";
// import Colors from "./Colors";
// import "../App.css";

// import DetailsThumb from "./DetailsThumb";
import womendress from "../Assest/Images/womendress.jpg";
// import womenfull from "../Assest/Images/womenfull.jpg";
// import womenkurti from "../Assest/Images/womenkurti.jpg";
// import womenonepiece from "../Assest/Images/womenonepiece.jpg";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Axios from "axios";

const SingleProductPage = (pid) => {
  const url = `http://localhost:4000/Product/${pid}`;
  const [products, setproducts] = useState({
    loading: false,
    data: null,
    error: false,
  });
  useEffect(() => {
    setproducts({
      loading: false,
      data: null,
      error: false,
    });
    if (pid) {
      Axios.get(url)
        .then((response) => {
          setproducts((preState) => ({
            ...preState,

            data: response.data,
          }));
        })
        .catch(() => {
          setproducts({
            loading: false,
            data: null,
            error: true,
          });
        });
    }
  }, []);

  let content = null;

  if (products.error) {
    content = <p>There was an error please try again later.</p>;
  }
  return (
    <div className="app">
      <div className="details" key={products.name}>
        <div className="big-img">
          <img src={womendress} alt="img" />
        </div>

        <div className="box">
          <div className="row">
            <h2>{products.title}</h2>
            <span>$25{products.price}</span>
          </div>
          <p>description: {products.description}</p>
          <p>{products.content}</p>

          <Link to="/Cart">
            <button className="cart">Add to cart</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
