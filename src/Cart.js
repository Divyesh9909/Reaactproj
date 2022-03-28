import { Axios } from "axios";
import React, { useState, useEffect } from "react";

// import { Link } from "react-router-dom";
// import Axios from "axios";

const Cart = ({ pid }) => {
  // console.log("pid ", pid);
  const url = `http://localhost:4000/Cart/${"pid"}`;
  const [products, setproducts] = useState({
    loading: false,
    data: null,
    error: false,
  });

  useEffect(() => {
    setproducts(
      {
        loading: false,
        data: null,
        error: false,
      },
      []
    );
    Axios.post("url")
      .then((response) => {
        if (response) {
          setproducts((preState) => ({
            ...preState,

            data: response.data,
          }));
        }
      })
      .catch(() => {
        setproducts((preState) => ({
          ...preState,

          data: pid,
        }));
      });
  }, []);
  // useEffect(() => {
  //   setproducts((preState) => ({
  //     ...preState,

  //     data: pid,
  //   }));
  // }, [pid]);

  return (
    <div className="app">
      <button>Add</button>
    </div>
  );
};
export default Cart;
