import React, { useState, useEffect } from "react";
// import "./Product.css";
import { Link, useParams } from "react-router-dom";
import Axios from "axios";

const SingleProductPage = ({ product }) => {
  // const id = req.params.id;
  let { pid } = useParams();
  const url = `http://localhost:4000/Product/${pid}`;
  useEffect(() => {}, [product]);

  // console.log("local state products ", pid);

  const [products, setproducts] = useState({
    loading: false,
    data: [],
    error: false,
  });

  let CartProducts = (product) => {
    let LocalStorageCart = [];

    LocalStorageCart = JSON.parse(localStorage.getItem("Cart")) || [];
    LocalStorageCart.push(product);
    localStorage.setItem("Cart", JSON.stringify(LocalStorageCart));
  };

  useEffect(() => {
    if (pid) {
      Axios.get(url)
        .then((response) => {
          console.log("Where is Response", response);
          setproducts((preState) => ({
            ...preState,

            data: response.data[0],
          }));
        })
        .catch((error) => {
          // console.log("Where Is Error", error);
          // setproducts({
          //   loading: false,
          //   data: null,
          //   error: false,
          // });
        });
    }

    setproducts((preState) => ({
      ...preState,

      data: product,
    }));
  }, []);

  let content = null;
  if (products.error) {
    content = <p>Error...</p>;
  }

  return (
    <div className="single">
      <div className="details">
        <p>{/* <h1>{product?.title}</h1> */}</p>

        <div className="details big-img">
          <img src={products?.data?.image} alt="img" />
        </div>
        <div className="box">
          <div className="row">
            <h2>{product?.title}</h2>
            <span>
              <h3> ₹ {products?.data?.price}</h3>
            </span>
          </div>
          <p>
            <h1>Description:</h1> {products?.data?.description}
          </p>
          <p>{products?.data?.content}</p>

          <Link to="/Cart">
            <button
              className="cart"
              // onClick={localStorage.setItem("cart", JSON.stringify(product))}
              onClick={() => {
                CartProducts(products?.data);
              }}
            >
              Add to cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
