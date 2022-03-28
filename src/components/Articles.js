import React, { useState, useEffect } from "react";
import Axios from "axios";
// import styled from "styled-components"; // import { styled } from "@material-ui/core";
// import Product from "./Product";
import "../App.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RiHeart3Fill } from "react-icons/ri";

const Articles = ({ SingleProductPageId }) => {
  const url = "http://localhost:4000/Product";
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
    Axios.get(url)
      .then((response) => {
        setproducts({
          loading: false,
          data: response.data,
          error: false,
        });
      })
      .catch(() => {
        setproducts({
          loading: false,
          data: null,
          error: true,
        });
      });
  }, [url]);

  let content = null;

  if (products.error) {
    content = <p>There was an error please try again later.</p>;
  }
  if (products.data) {
    content = products.data.map((Product, key) => (
      <div className="card">
        <div>
          <br />
          {Product.title}
          <img src={Product.image} alt="img" />
          <br />
          Price : {Product.price}
          <br />
          Category : {Product.category}
          <br />
          <div
            onClick={() => {
              console.log("Hello ", Product);
              SingleProductPageId(Product);
              console.log("conntent", Product.id);
            }}
          >
            <Link to="/SingleProductPage">
              <a type="button" class="FaShoppingCart">
                <FaShoppingCart color="Black" size={30} />
              </a>
            </Link>

            <a type="button" class="RiHeart3Fill">
              <RiHeart3Fill className="heart" size={30} />
            </a>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <div>
      <h1>BestSellers Product</h1>
      <div className=" product-css">{content}</div>
    </div>
  );
};
export default Articles;
