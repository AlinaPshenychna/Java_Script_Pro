import "./Input.css";

function Input() {
  return (
    <div className="Input-flex">
      <input className="Input-name" type="text" placeholder="User name" />
      <input className="Input-password" type="password" placeholder="Password" />
    </div>
  ); 
}

export default Input;
