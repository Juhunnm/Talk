import "./Header.css";

const Header = ({ leftChild, rightChild }) => {
  return (
    <header className="Header">
      <div className="header_left">{leftChild}</div>
      <div className="header_center">1DayTalk</div>
      <div className="header_right">{rightChild}</div>
    </header>
  );
};

export default Header;
