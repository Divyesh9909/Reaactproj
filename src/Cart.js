import axios from "axios";
import React, { useState, useEffect, Component } from "react";
import { BsBookmarkHeartFill, BsFillTrashFill } from "react-icons/bs";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { FaTruckMoving } from "react-icons/fa";
import { TiMinus, TiPlus } from "react-icons/ti";
import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";
// import Axios from "axios";

const Cart = ({ CartProducts, pid }) => {
  // console.log("pid ", pid);
  // const CartLocalStorage = JSON.parse(localStorage.getItem("Cart")) || [];
  const [CartLocalStorage, setuserCartDataFromLocalStorage] = useState([]);
  const url = `http://localhost:4000/Cart/${pid}`;
  // console.log("CartLocalStorage ", CartLocalStorage);

  const [products, setproducts] = useState({
    loading: false,
    data: null,
    error: false,
  });

  const [ParemId, setParemId] = useState("");

  const [count, setCount] = useState(0);
  const increaseCount = () => {
    return setCount(count + 1);
  };
  const decreaseCount = () => {
    return setCount(count - 1);
  };

  useEffect(() => {
    setuserCartDataFromLocalStorage(
      JSON.parse(localStorage.getItem("Cart")) || []
    );
  }, [ParemId]);

  const removePurchasedPFromCart = (paramId) => {
    const LocalStorageCart = JSON.parse(localStorage.getItem("Cart")) || [];

    var index = LocalStorageCart.map((x) => {
      return x.id;
    }).indexOf(paramId);

    LocalStorageCart.splice(index, 1);

    localStorage.setItem("Cart", JSON.stringify(LocalStorageCart));
    setParemId(paramId);
  };

  useEffect(() => {
    // console.log("checking if api call is happening , ", pid && pid);

    axios
      .post(url, {})
      .then(function (response) {
        // localStorage.setItem("cart", JSON.stringify(pid));
      })
      .catch(function (error) {});
  }, []);

  return (
    <div className="container mb-3">
      <div className="row">
        <div className="col-md-9">
          <div className="card">
            <div className="table-responsive">
              <table className="table table-borderless">
                <thead className="text-muted">
                  <tr className="small text-uppercase">
                    {/* <th scope="col">Title</th>
                    <th scope="col" width={120}></th> */}
                    <th scope="col">Product</th>

                    <th scope="col" width={120}>
                      Quantity
                    </th>
                    <th scope="col" width={150}>
                      Price
                    </th>
                    <th scope="col" className="text-right" width={130}></th>
                  </tr>
                </thead>
                {CartLocalStorage.map((Cart) => {
                  return (
                    <tbody>
                      <tr>
                        <td>
                          <hr></hr>
                          <div className="row">
                            <div className="col-3 d-none d-md-block">
                              <img src={Cart.image} width="80" alt="..." />
                            </div>
                            <div className="col">
                              <Link
                                to="/product/detail"
                                className="text-decoration-none"
                              >
                                {/* Another name of some product goes just here */}
                              </Link>
                              <p className="small text-muted">
                                {/* Size: XL, Color: blue, Brand: XYZ */}
                              </p>
                            </div>
                          </div>
                          {/* <hr /> */}
                        </td>
                        <td>
                          <div className="input-group input-group-sm mw-140">
                            <button
                              className="btn btn-primary text-white"
                              type="button"
                              onClick={decreaseCount}
                            >
                              <TiMinus />
                            </button>
                            <text
                              type="text"
                              className="form-control"
                              defaultValue="1"
                            >
                              {count}
                            </text>
                            <button
                              className="btn btn-primary text-white"
                              type="button"
                              onClick={increaseCount}
                            >
                              <TiPlus />
                            </button>
                          </div>
                        </td>
                        <td>
                          <var className="price">{Cart.price}</var>
                          <small className="d-block text-muted">
                            ₹79.00 each
                          </small>
                        </td>
                        <td className="text-right">
                          <button className="btn btn-sm btn-outline-secondary mr-2">
                            <BsBookmarkHeartFill className="i-va" />
                          </button>
                          <button className="btn btn-sm btn-outline-danger">
                            <BsFillTrashFill
                              className="i-va"
                              onClick={() => removePurchasedPFromCart(Cart.id)}
                            />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
            <div className="card-footer">
              <Link to="/checkout" className="btn btn-primary float-right">
                Make Purchase <BiChevronRight className="i-va" />
              </Link>
              <Link to="/Articles" className="btn btn-secondary">
                <BiChevronLeft className="i-va" /> Continue shopping
              </Link>
            </div>
          </div>
          <div className="alert alert-success mt-3">
            <p className="m-0">
              <FaTruckMoving className="i-va mr-2" /> Free Delivery within 1-2
              weeks
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card mb-3">
            {/* <div className="card-body">
                  <CouponApplyForm onSubmit={this.onSubmitApplyCouponCode} />
                </div> */}
          </div>
          <div className="card">
            <div className="card-body">
              <dl className="row border-bottom">
                <dt className="col-6">Total price:</dt>
                <dd className="col-6 text-right">₹1,568</dd>

                <dt className="col-6 text-success">Discount:</dt>
                <dd className="col-6 text-success text-right">₹58</dd>
                <dt className="col-6 text-success">
                  Coupon: <span className="small text-muted"></span>{" "}
                </dt>
                <dd className="col-6 text-success text-right">₹68</dd>
              </dl>
              <dl className="row">
                <dt className="col-6">Total:</dt>
                <dd className="col-6 text-right  h5">
                  <strong>₹1,350</strong>
                </dd>
              </dl>
              <hr />
              <p className="text-center">
                <img
                  src="../../images/payment/payments.webp"
                  alt="..."
                  height={26}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light border-top p-4">
        <div className="Card">
          <h3>Payment and Refund Policy</h3>
          <p>
            Customers expect you to offer a refund policy that explains how,
            when, and under what conditions they can return purchased items or
            services.
          </p>
          <p>
            No refund policies for subscriptions typically specify that users
            will not get refunds for payments already made. Because
            subscriptions require recurring payments over a set period of time,
            refund policies should also address how cancellations work.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Cart;
