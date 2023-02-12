import Body from "./components/Body";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Popup from "./component/Popup";
import { useState } from "react";

const App = () => {
  const [popupactive, setpopupactive] = useState(false);

  return (
    <div className="">
      <Header />
      <Hero setactive={setpopupactive} />
      <img alt="" className="ball" src="/img/Ellipse37.png" />
      <img alt="" className="ball2" src="/img/Ellipse39.png" />
      <img alt="" className="line" src="/img/Vectorline.png" />
      <img alt="" className="star3" src="/img/Star1.png" />
      <img alt="" className="star4" src="/img/Star1.png" />
      <Body setactive={setpopupactive} />
      <Footer />
      {popupactive && <Popup setactive={setpopupactive} />}
    </div>
  );
};

export default App;
