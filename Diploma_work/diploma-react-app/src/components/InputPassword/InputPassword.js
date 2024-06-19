import "./InputPassword.css";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import React, { Component } from "react";
import Input from "../Input/Input";

class InputPassword extends Component {
  constructor(props) {
    super(props);
    this.state = { isEyeOn: true };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isEyeOn: !prevState.isEyeOn,
    }));
  }

  render() {
    return (
      <div className="InputPassword-main">
        <Input
          type={this.state.isEyeOn ? "password" : "text"}
          placeholder="Password"
        />
        <span className="Input-Eye-icon" onClick={this.handleClick}>
          {this.state.isEyeOn ? <IoEye /> : <IoEyeOff />}
        </span>
      </div>
    );
  }
}

export default InputPassword;
