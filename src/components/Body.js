import Box2 from "./Box2";

const Body = ({ setactive }) => {
  return (
    <div className="section-body">
      <div className="body-discription">
        <img alt="" className="ball3" src="/img/Ellipse38.png" />
        <img alt="" className="blue1" src="/img/Highlight1.png" />
        <img alt="" className="blue2" src="/img/Highlight1.png" />
        <img alt="" className="star5" src="/img/Star4.png" />
        <img alt="" className="star6" src="/img/Star2.png" />
        <img alt="" className="star7" src="/img/Star4.png" />
        <h1 className="secondary-heading2">Priority Access</h1>
        <img alt="" className="line6" src="/img/line6.png" />
        <p className="description2">
          Get ready to revolutionize the way you interact with your customers
          and drive sales with Loyalbaze. Skip the waitlist and get exclusive
          priority access to LoyalBaze. Limited slots available. Please tell us
          a bit about your business and needs and of our consultants will be in
          touch Immediately!
        </p>
      </div>
      <div className="body-form">
        <h3 className="form-heading">Book a Consultation with us</h3>
        <form className="cta-form">
          <div className="cta2">
            <input type={Text} placeholder="Enter your full name" required />
          </div>
          <div className="cta2">
            <input type={Text} placeholder="Enter your work email" required />
          </div>
          <div className="cta2">
            <input type={Text} placeholder="Mobile number" required />
          </div>
          <div className="cta2">
            <input type={Text} placeholder="Company Name" required />
          </div>
          <div className="cta2">
            <input type={Text} placeholder="Select Country" required />
          </div>

          <textarea
            type={Text}
            placeholder=" Drop a message....."
            cols="58"
            rows="6"
            required
          ></textarea>

          <Box2 text="Send Request" setactive={setactive} />
        </form>
      </div>
    </div>
  );
};

export default Body;
