import "./Button.css";

const Button = ({ text, color, onClick }) => {
  return (
    <button onClick={onClick} className={`Button Button_${color}`}>
      {text}
    </button>
  );
};

export default Button;
