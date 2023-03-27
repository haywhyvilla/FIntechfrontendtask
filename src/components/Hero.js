import Form from "./Form";
import Box from "./Box";
import Member from "./Member";

const Hero = ({ setactive }) => {
  return (
    <div className="container">
      <img alt="" className="star" src="/img/Star2.png" />
      <img alt="" className="star2" src="/img/Star2.png" />

      <img alt="omoo" className="omooo" src="/img/Ellipse40.png" />
      <h3 className="secondary-heading">
        Turn your best customers into <span> Loyal fans</span>
      </h3>

      <p className="description">
        Loyalbaze, empowers businesses to offer digital, mobile-first loyalty
        programs to their customers. With our AI Powered platform, you can
        easily create and manage custom loyalty and rewards programs, track
        customer engagement, and gain valuable insights to improve your
        business. Sign up now to get early access.
      </p>
      <Form />
      <Box text="Get early access" setactive={setactive} />
      <Member />
    </div>
  );
};

export default Hero;
