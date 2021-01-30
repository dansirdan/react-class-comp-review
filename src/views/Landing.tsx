import * as React from "react";
import "../scss/auth-forms.scss";
import LoginForm from "../components/LoginForm/LoginForm";
import SignupForm from "../components/SignupForm/SignupForm";

class Landing extends React.Component<{}, { showSignup: boolean }> {
  readonly state: { showSignup: boolean } = { showSignup: false };

  handleChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    this.setState(prevState => ({
      showSignup: !prevState.showSignup,
    }));
  };

  render() {
    return (
        <div className='auth-container'>
          <button onClick={this.handleChange}>
              {this.state.showSignup ? "Log In" : "Sign Up"} →
          </button>
          {this.state.showSignup ? <SignupForm /> : <LoginForm />}
        </div>
    );
  }
}

export default Landing;
