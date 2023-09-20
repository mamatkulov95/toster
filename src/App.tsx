import Header from "./components/Header/Header";
import Subheader from "./components/SubHeader/Subheader";
import Banner from "./components/Banner/Banner";
import Products from "./components/Products/Products";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Subheader />
      <Banner />
      <Products />
    </div>
  );
}

export default App;
