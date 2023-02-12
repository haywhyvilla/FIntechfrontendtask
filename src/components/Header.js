import Button from "./Button";

const Header = () => {
  return (
    <header className="header">
      <div>
        <h1 className="logo">
          I
          <img alt="" src="/img/vector.png" />
          yalbaze
        </h1>
      </div>

      <Button color="inherit" text="Get Priority Access" />
    </header>
  );
};

export default Header;
