import "./Card.css";
import LoginLogo from "../../../../assets/login-logo.svg";
import Input from "../../../../components/input/Input";
import Button from "../../../../components/button/Button";


function Card() {
  return (
    <div className="Card-container">
      <div className="Card-components">
        <img src={LoginLogo} alt="logo Rozetka" className=" Login-logo"></img>
      <Input/>
      <Button/>
      </div>
    </div>
  );
}

export default Card;
