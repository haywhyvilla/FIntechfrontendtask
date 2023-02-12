const Popup = ({ setactive }) => {
  return (
    <div className="section-popup" onClick={() => setactive(false)}>
      <div className="center">
        <img className="" src="/img/Group243.png" />
        <div>
          <h1 className="secondary-heading3">Congratulations</h1>
          <p className="description2">
            Great move! You're one step closer to getting <br /> your hands on
            the product. Please check your <br /> mail for more information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
