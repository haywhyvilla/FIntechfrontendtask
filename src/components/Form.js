const Form = () => {
  return (
    <div>
      <form className="cta-form">
        <input
          className="cta"
          type={Text}
          placeholder="Tell us your name"
          required
        />
        <input
          className="cta"
          type={Text}
          placeholder="Enter your email address"
          required
        />
      </form>
    </div>
  );
};

export default Form;
