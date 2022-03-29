import axios from "axios";
import React, { useState, useEffect } from "react";

// import { Link } from "react-router-dom";
// import Axios from "axios";

const Cart = ({ pid }) => {
  // console.log("pid ", pid);
  const url = `http://localhost:4000/Cart/${pid}`;

  const [products, setproducts] = useState({
    loading: false,
    data: null,
    error: false,
  });

  useEffect(() => {
    console.log("checking if api call is happening , ", pid && pid);

    axios
      .post(url, {})
      .then(function (response) {
        console.log("response ", response);
      })
      .catch(function (error) {
        console.log("error ", error);
      });
  }, []);

  return (
    <div className="app">
      <button>Add</button>
    </div>
  );
};
export default Cart;
