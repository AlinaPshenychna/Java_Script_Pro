import "./Button.css";

const Button = ({ buttonText, className, icon }) => (
  <button className={className}>
    {icon && <div className="Button-icon">{icon}</div>}
    {buttonText}
  </button>
);
export default Button;
