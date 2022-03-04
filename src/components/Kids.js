import React from "react";
import "./Product.css";
import Colors from "./Colors";
import DetailsThumb from "./DetailsThumb";
import kidsdress from "../Assest/Images/kidsdress.jpg";
import kidskurta from "../Assest/Images/kidskurta.jpg";
import kidshirt from "../Assest/Images/kidshirt.jpg";
import kidsoutfit from "../Assest/Images/kidsoutfit.jpg";
import { Link } from "react-router-dom";

class Product extends React.Component {
  state = {
    products: [
      {
        _id: "1",
        title: "Kids Clothes",
        src: [kidskurta, kidsoutfit, kidsdress, kidshirt],
        description: "Raymond Shirts",
        content: "This is the Kids page.You can choose any product ",
        price: 25,
        colors: ["red", "black", "crimson", "teal"],
        count: 1,
      },
    ],
    index: 0,
  };

  myRef = React.createRef();

  handleTab = (index) => {
    this.setState({ index: index });
    const images = this.myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount() {
    const { index } = this.state;
    this.myRef.current.children[index].className = "active";
  }

  render() {
    const { products, index } = this.state;
    return (
      <div>
        <h1>Welcome to Kids Page</h1>
        <div>
          <div className="app">
            {products.map((item) => (
              <div className="details" key={item._id}>
                <div className="big-img">
                  <img src={item.src[index]} alt="" />
                </div>

                <div className="box">
                  <div className="row">
                    <h2>{item.title}</h2>
                    <span>${item.price}</span>
                  </div>
                  <Colors colors={item.colors} />

                  <p>{item.description}</p>
                  <p>{item.content}</p>

                  <DetailsThumb
                    images={item.src}
                    tab={this.handleTab}
                    myRef={this.myRef}
                  />
                  <Link to="/Question">
                    <button className="cart">Add to cart</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="app">
            {products.map((item) => (
              <div className="details" key={item._id}>
                <div className="big-img">
                  <img src={item.src[index]} alt="" />
                </div>

                <div className="box">
                  <div className="row">
                    <h2>{item.title}</h2>
                    <span>${item.price}</span>
                  </div>
                  <Colors colors={item.colors} />

                  <p>{item.description}</p>
                  <p>{item.content}</p>

                  <DetailsThumb
                    images={item.src}
                    tab={this.handleTab}
                    myRef={this.myRef}
                  />
                  <button className="cart">Add to cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
