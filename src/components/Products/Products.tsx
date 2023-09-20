import "./Products.css";
import trustpilot from "../../assets/photos/trustpilot.svg";
import img1 from "../../assets/photos/img1.svg";
import fastdelivery from "../../assets/photos/fastdelivery.svg";
import instock from "../../assets/photos/instock.svg";
import rate from "../../assets/photos/rate.svg";

export default function Products() {
  return (
    <div className="products">
      <div className="product-rate">
        <p className="product-grade">Excellent 4.8/5</p>
        <img src={trustpilot} alt="trust-pilot" />
        <p className="product-selling">best selling</p>
      </div>

      <p className="product-title">Orthopedic Slippers</p>

      <img src={img1} alt="img1" />

      <div className="img-container">
        <img src={img1} className="img-flex" alt="img1" />
        <img src={img1} className="img-flex" alt="img1" />
        <img src={img1} className="img-flex" alt="img1" />
        <img src={img1} className="img-flex" alt="img1" />
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
