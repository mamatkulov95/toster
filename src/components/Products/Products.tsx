import { useState } from "react";

import "./Products.css";
import trustpilot from "../../assets/photos/trustpilot.svg";
import img1 from "../../assets/photos/img1.svg";
import img2 from "../../assets/photos/img2.svg";
import img3 from "../../assets/photos/img3.svg";
import img4 from "../../assets/photos/img4.svg";

import fastdelivery from "../../assets/photos/fastdelivery.svg";
import instock from "../../assets/photos/instock.svg";
import rate from "../../assets/photos/rate.svg";

export default function Products() {
  const [selectedImage, setSelectedImage] = useState(img1);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleLittleImageClick = (imageSrc: any) => {
    setSelectedImage(imageSrc);
  };

  return (
    <div className="products">
      <div className="product-rate">
        <p className="product-grade">Excellent 4.8/5</p>
        <img src={trustpilot} alt="trust-pilot" />
        <p className="product-selling">best selling</p>
      </div>

      <p className="product-title">Orthopedic Slippers</p>

      <img src={selectedImage} alt="selected-img" className="main-img" />

      <div className="img-container">
        <img
          src={img1}
          className="img-flex"
          alt="img1"
          onClick={() => handleLittleImageClick(img1)}
        />
        <img
          src={img2}
          className="img-flex"
          alt="fastdelivery"
          onClick={() => handleLittleImageClick(img2)}
        />
        <img
          src={img3}
          className="img-flex"
          alt="instock"
          onClick={() => handleLittleImageClick(img3)}
        />
        <img
          src={img4}
          className="img-flex"
          alt="rate"
          onClick={() => handleLittleImageClick(img4)}
        />
      </div>

      <div className="product-info">
        <img src={fastdelivery} alt="fast-delivery" />
        <img src={instock} alt="instock" />
        <img src={rate} alt="rate" />
      </div>

      <div className="select-area">
        <div className="select-container">
          <p>color</p>
          <select id="product" className="select-color">
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="green">Green</option>
          </select>
        </div>

        <div className="select-container">
          <p>size</p>
          <select id="product" className="select-color">
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>

      <a href="https://www.youtube.com" className="buy-btn">
        <span className="buy-btn-content">BUY NOW</span>
      </a>
    </div>
  );
}
