import axios from "axios";
import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Axios from "axios";

const Cart = ({ CartProducts, pid }) => {
  // console.log("pid ", pid);
  // const LocalStorage = JSON.parse(localStorage.getItem("cart"));
  const url = `http://localhost:4000/Cart/${pid}`;

  const [products, setproducts] = useState({
    loading: false,
    data: null,
    error: false,
  });

  useEffect(() => {
    // console.log("checking if api call is happening , ", pid && pid);

    axios
      .post(url, {})
      .then(function (response) {
        // localStorage.setItem("cart", JSON.stringify(pid));
        // console.log("response ", response);
      })
      .catch(function (error) {
        // console.log("error", error);
      });
  }, []);

  return (
    <div className="app">
      <h2>{CartProducts?.price}</h2>
      <h2>{CartProducts?.title}</h2>
      {/* <img src={LocalStorage?.price} alt="Image wiil be shown here"></img> */}
      <img src={CartProducts?.image} alt="Image wiil be shown here"></img>
      <button>Add</button>
    </div>
  );
};
export default Cart;
