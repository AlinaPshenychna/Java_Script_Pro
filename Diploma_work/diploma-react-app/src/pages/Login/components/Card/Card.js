import "./Card.css";
import InputPassword from "../../../../components/InputPassword/InputPassword"
import LoginLogo from "../../../../assets/login-logo.svg";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";

const Card = () => {
  return (
    <div className="Card-container">
      <div className="Card-components">
        <img src={LoginLogo} alt="logo Rozetka" className="Login-logo"></img>
        <Input type="text" placeholder="User name" />
        <InputPassword/>
        <Button buttonText="Login" className="Button" />
      </div>
    </div>
  );
};

export default Card;
