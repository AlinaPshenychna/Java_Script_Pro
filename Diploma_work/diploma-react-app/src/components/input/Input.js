import "./Input.css";

const Input = ({ type, placeholder }) => (
  <div className="Input-flex">
    <input className="Input-name" type={type} placeholder={placeholder} />
  </div>
);

export default Input;
