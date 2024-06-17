import "./Input.css";

const Input = ({ type, placeholder, icon }) => (
  <div className="Input-flex">
    <input className="Input-name" type={type} placeholder={placeholder} />
    {icon && <div className="Input-icon">{icon}</div>}
  </div>
);

export default Input;
