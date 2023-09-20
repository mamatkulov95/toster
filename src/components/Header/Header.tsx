import headerImg from "../../assets/photos/headerpng.png";

import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <img src={headerImg} alt="Header-img" />
    </div>
  );
}
