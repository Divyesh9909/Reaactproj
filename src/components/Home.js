import React from "react";
import "./Home.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import image4 from "../Assest/Images/image4.jpg";
import image1 from "../Assest/Images/image1.jfif";
import image3 from "../Assest/Images/image3.jfif";
//import image2 from "../image2.png";
import image6 from "../Assest/Images/image6.jpg";
const slideImages = [
  {
    url: image4,
    caption: "Slide 1",
  },

  {
    url: image1,
    caption: "Slide 2",
  },
  {
    url: image3,
    caption: "Slide 3",
  },
];
const home = () => {
  return (
    <div>
      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div className="each-slide" key={index}>
              <div>
                <img src={slideImage.url} className="crausalImage" />
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))}
        </Slide>
      </div>

      <div class="w3-row w3-padding-64" id="about">
        <div class="w3-col m6 w3-padding-large w3-hide-small">
          <img
            src={image6}
            class="w3-round w3-image w3-opacity-min ImgbelowCrausal"
            alt="Table Setting"
            justify-content="space-around"
            align-items="left"
          />
        </div>

        <div class="w3-col m6 w3-padding-large">
          <h1 class="w3-center">About Product</h1>
          <br></br>
          <h5 class="w3-center">Tradi-tion since 1889</h5>
          <p class="w3-large">
            The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet,
            consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.We only use <span class="w3-tag w3-light-grey">seasonal</span> ingredients.
          </p>
          <p class="w3-large w3-text-grey w3-hide-medium">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt
            ut labore et dolore magna s aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
};
export default home;
