import "./InputPassword.css";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import React, { Component } from "react";
import Input from "../Input/Input";

const InputPassword = () => {
  const [isEyeOn, setIsEyeOn] = useState(true);

  const handleClick = () => {
    setIsEyeOn(!isEyeOn);
  };

  return (
    <div className="InputPassword-main">
      <Input type={isEyeOn ? "password" : "text"} placeholder="Password" />
      <span className="Input-Eye-icon" onClick={handleClick}>
        {isEyeOn ? <IoEye /> : <IoEyeOff />}
      </span>
    </div>
  );
};
export default InputPassword;
