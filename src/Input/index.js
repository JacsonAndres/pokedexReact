import React from "react";
import "./index.css";
class Input extends React.Component {
  render(props) {
    const { label } = this.props;

    return (
      <div>
        <label>{label}</label>
        <br />
        <input class="input " type="text" placeholder={label} />
      </div>
    );
  }
}

export default Input;
