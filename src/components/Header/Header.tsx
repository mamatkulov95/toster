import "./Header.css";
import headerImg from "../../assets/photos/headerpng.png";

export default function Header() {
  return (
    <div className="header">
      <img src={headerImg} alt="Header-img" />
    </div>
  );
}
