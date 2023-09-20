import subheader from "../../assets/photos/cushion.png";

import "./Subheader.css";

export default function Subheader() {
  return (
    <div className="subheader">
      <img src={subheader} className="subheader-img" alt="subheader" />
      <p className="subheader-title">orthopedic slippers</p>
    </div>
  );
}
