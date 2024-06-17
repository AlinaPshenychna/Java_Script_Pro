import "./Card.css";
import LoginLogo from "../../../../assets/login-logo.svg";
import Input from "../../../../Components/input/Input";
import Button from "../../../../Components/button/Button";

const Card = () => (
  <div className="Card-container">
    <div className="Card-components">
      <img src={LoginLogo} alt="logo Rozetka" className=" Login-logo"></img>
      <Input type="text" placeholder="User name" />
      <Input type="password" placeholder="Password" />
      <Button buttontext="Login" />
    </div>
  </div>
);
export default Card;
