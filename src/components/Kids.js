import React from "react";
import "./Product.css";
import Colors from "./Colors";
import DetailsThumb from "./DetailsThumb";

class Product extends React.Component {
  state = {
    products: [
      {
        _id: "1",
        title: "Kids Clothes",
        src: [
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.esquire.com%2Fstyle%2Fmens-fashion%2Fg20686368%2Fbest-cheap-online-clothing-stores-for-men%2F&psig=AOvVaw0NjWHXEMWFjDByP90mBH5c&ust=1643196793208000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJC-pOT3zPUCFQAAAAAdAAAAABAD",
          "https://www.upsieutoc.com/images/2020/06/27/img2.jpg",
          "https://www.upsieutoc.com/images/2020/06/27/img3.jpg",
          "https://www.upsieutoc.com/images/2020/06/27/img4.jpg",
        ],
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
                  <button className="cart">Add to cart</button>
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
