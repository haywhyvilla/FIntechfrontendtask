const Box = ({ color, text }) => {
  return (
    <button style={{ backgroundColor: color }} className="box">
      {text}
    </button>
  );
};

export default Box;
