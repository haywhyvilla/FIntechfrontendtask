import { BiUserCircle } from "react-icons/bi";
import { MdForwardToInbox } from "react-icons/md";

const Form = () => {
  return (
    <div>
      <form className="cta-form">
        <div className="cta">
          <BiUserCircle />
          <input type={Text} placeholder="Tell us your name" required />
        </div>
        <div className="cta">
          <MdForwardToInbox />
          <input type={Text} placeholder="Enter your email address" required />
        </div>
      </form>
    </div>
  );
};

export default Form;
