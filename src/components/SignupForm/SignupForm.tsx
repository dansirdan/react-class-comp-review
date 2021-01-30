import * as React from "react";
import { SignupFormState } from "../../types";
import FIREBASE_API from "../../utils/firebase-auth-api";
// import { connect } from 'react-redux';
// import { USER_LOGIN, ADMIN_LOGIN } from '../../redux/actions/UserActions';

// interface SignupProps {
//     dispatch: () => void;
// }

class SignupForm extends React.Component {
  readonly signupState: SignupFormState = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  handleChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    this.setState({
      ...this.signupState,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();

    FIREBASE_API.signUpUser({
      email: this.signupState.email,
      password: this.signupState.password,
    })
      .then(userCredentials => {
        console.log(userCredentials);

        /// TODO: FIGURE OUT DISPATCH
    })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='auth-form'>
        <h3>Sign Up</h3>
        <label>Email</label>
        <input
          type='text'
          name='email'
          value={this.signupState.email}
          onChange={this.handleChange}
        />
        <label>Password</label>
        <input
          type='text'
          name='password'
          value={this.signupState.password}
          onChange={this.handleChange}
        />
        <label>Confirm Password</label>
        <input
          type='text'
          name='confirmPassword'
          value={this.signupState.confirmPassword}
          onChange={this.handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

// const mapStateToProps = (state: SignupFormState) => ({
//     signupState: state
// });

// const mapDispatchToProps = dispatch => {
//     return {

//     }
// }

// export default connect<>(mapStateToProps, mapDispatchToProps)(SignupForm);

export default SignupForm;
