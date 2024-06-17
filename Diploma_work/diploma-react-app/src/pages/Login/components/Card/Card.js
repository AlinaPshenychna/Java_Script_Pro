import "./Card.css";
import LoginLogo from "../../../../assets/login-logo.svg";
import Input from "../../../../components/IInput/Input";
import Button from "../../../../components/Button/Button";
// import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

const Card = () => {
  return (
    <div className="Card-container">
      <div className="Card-components">
        <img src={LoginLogo} alt="logo Rozetka" className=" Login-logo"></img>
        <Input type="text" placeholder="User name" />
        <Input type="password" placeholder="Password" icon={<IoEyeOff />} />
        <Button buttonText="Login" />
      </div>
    </div>
  );
}

export default Card;
