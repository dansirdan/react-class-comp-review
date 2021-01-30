import * as React from "react";
import { LoginFormState } from "../../types";

class LoginForm extends React.Component {
  readonly state: LoginFormState = {
    email: "",
    password: "",
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
      <form onSubmit={this.handleSubmit} className='auth-form'>
        <h3>Log In</h3>
        <label>Email</label>
        <input
          type='text'
          name='email'
          value={this.state.email}
          onChange={this.handleChange}
        />
        <label>Password</label>
        <input
          type='text'
          name='password'
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

export default LoginForm;
