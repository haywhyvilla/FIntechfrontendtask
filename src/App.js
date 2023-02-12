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
      <img className="ball" src="/img/Ellipse37.png" />
      <img className="ball2" src="/img/Ellipse39.png" />
      <img className="line" src="/img/Vectorline.png" />
      <img className="star3" src="/img/Star1.png" />
      <img className="star4" src="/img/Star1.png" />
      <Body setactive={setpopupactive} />
      <Footer />
      {popupactive && <Popup setactive={setpopupactive} />}
    </div>
  );
};

export default App;
