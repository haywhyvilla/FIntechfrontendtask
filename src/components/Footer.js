import { FaWarehouse } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="section-footer">
      <div className="stroke-horizontal"></div>
      <div className="footer-text">
        <div className="foot">
          <FaWarehouse />
          <p>
            2nd Floor, The Garnet Building, KM14 <br /> Lekki Epe Expressway,
            Lagos, Nigeria.
          </p>
        </div>
        <p>Loyalbaze is almost here.</p>
        <div className="foot">
          <FiPhoneCall />
          <p>+234 903 618 9485</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
