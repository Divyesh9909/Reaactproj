import React, { useEffect } from "react";
// import "./Product.css";
import { Link } from "react-router-dom";
const SingleProductPage = ({ product }) => {
  useEffect(() => {
    // console.log("local state products ", product);
  }, [product]);

  return (
    <div className="single">
      <div className="details">
        <p>{/* <h1>{product?.title}</h1> */}</p>

        <div className="details big-img">
          <img src={product?.image} alt="img" />
        </div>
        <div className="box">
          <div className="row">
            <h2>{product?.title}</h2>
            <span>
              <h3> ₹ {product?.price}</h3>
            </span>
          </div>
          <p>
            <h1>Description:</h1> {product?.description}
          </p>
          <p>{product?.content}</p>

          <Link to="/Cart">
            <button className="cart">Add to cart</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
