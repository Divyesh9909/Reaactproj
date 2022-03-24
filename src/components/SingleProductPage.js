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
// import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Axios from "axios";

const SingleProductPage = ({ product }) => {
  // console.log("pid ", pid);
  // const url = `http://localhost:4000/Product/${pid}`;
  const [products, setproducts] = useState({
    loading: false,
    data: null,
    error: false,
  });
  // useEffect(() => {
  //   if (pid) {
  //     Axios.get(url)
  //       .then((response) => {
  //         if (response) {
  //           setproducts((preState) => ({
  //             ...preState,

  //             data: response.data,
  //           }));
  //         }
  //       })
  //       .catch(() => {
  //         setproducts((preState) => ({
  //           ...preState,

  //           data: product,
  //         }));
  //       });
  //   }
  // }, []);

  useEffect(() => {
    setproducts((preState) => ({
      ...preState,

      data: product,
    }));
  }, [product]);

  useEffect(() => {
    console.log("local state products ", products);
  }, [products]);

  return (
    <div className="app">
      <div className="details" key={products?.data?.title}>
        <p>
          <h1>{products?.data?.title}</h1>
        </p>

        <div className="big-img">
          <img src={products?.data?.image} alt="img" />
        </div>
        <div className="box">
          <div className="row">
            <h2>{products.title}</h2>
            <span>
              <h3> ₹ {products?.data?.price}</h3>
            </span>
          </div>
          <p>
            <h1>Description:</h1> {products?.data?.description}
          </p>
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

// <div className="app">
//       <div className="details" key={products?.data?.title}>
//         <p>{products?.data?.title}</p>
//         <div className="big-img">
//           <img src={products?.data?.image} alt="img" />
//         </div>
//       </div>
//     </div>
//   );
// };
