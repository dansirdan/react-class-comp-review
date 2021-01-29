import * as React from "react";
import { LoginFormState } from "../../types";

class LoginForm extends React.Component {
  readonly state: LoginFormState = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  handleChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(JSON.stringify(this.state, null, " "));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email
            <input
              type='text'
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password
            <input
              type='text'
              name='password'
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Confirm Password
            <input
              type='text'
              name='confirmPassword'
              value={this.state.confirmPassword}
              onChange={this.handleChange}
            />
          </label>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
