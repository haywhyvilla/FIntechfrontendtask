import Box from "./Box";
import Form from "./Form";

const Body = () => {
  return (
    <div className="section-body">
      <div className="body-discription">
        <h1 className="secondary-heading">Priority Access</h1>
        <p className="description">
          Get ready to revolutionize the way you interact with your customers
          and drive sales with Loyalbaze. Skip the waitlist and get exclusive
          priority access to LoyalBaze. Limited slots available. Please tell us
          a bit about your business and needs and of our consultants will be in
          touch Immediately!
        </p>
      </div>
      <div className="body-form">
        <h3>Book a Consultation with us</h3>
        <form className="cta-form">
          <div className="cta">
            <input type={Text} placeholder="Enter your full name" required />
          </div>
          <div className="cta">
            <input type={Text} placeholder="Enter your work email" required />
          </div>
          <div className="cta">
            <input type={Text} placeholder="Mobile number" required />
          </div>
          <div className="cta">
            <input type={Text} placeholder="Company Name" required />
          </div>
          <div className="cta">
            <input type={Text} placeholder="Select Country" required />
          </div>
          <div className="cta">
            <textarea type={Text} placeholder="Select Country" required />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Body;
