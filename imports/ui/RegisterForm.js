import React, { Component } from 'react';

class RegisterForm extends Component {
  render() {
    return (
      <form>
        <input type="email" ref={input => (this.email = input)} />
        <input type="password" ref={input => (this.password = input)} />
        <button type="submit">Register User</button>
      </form>
    );
  }
}

export default RegisterForm;
