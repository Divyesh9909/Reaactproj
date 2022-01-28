import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import image4 from "../Assest/Images/image4.jpg";
import image1 from "../Assest/Images/image1.jfif";
import image3 from "../Assest/Images/image3.jfif";
//import image2 from "../image2.png";
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
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div
              style={{
                backgroundImage: `url(${slideImage.url})`,
                height: "500px",
                width: "200px",
                backgroundRepeat: "no repeat",
              }}
            >
              <span>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};
export default home;
