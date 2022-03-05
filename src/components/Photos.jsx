import "../styles/Photos.css";
import React from "react";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image5 from "../assets/image5.png";

const Photos = () => {
  return (
    <div>
      <h1 className="photos-title">PHOTOS</h1>
      <div className="photo-collage">
        <img src={image1} alt="ontario place at night" className="image" />
        <img src={image2} alt="etobicoke skyline" className="image" />
        <img src={image5} className="image" />
      </div>
    </div>
  );
};

export default Photos;
