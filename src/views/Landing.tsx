import * as React from "react";
import LoadingIcon from "../components/LoadingIcon/LoadingIcon";
import LoginForm from "../components/LoginForm/LoginForm";

class Landing extends React.Component {

  render() {
    return (
      <div>
        <p>
          Hello, world!
          </p>
        <LoginForm/>
        <LoadingIcon/>
      </div>
    );
  }
}

export default Landing;
