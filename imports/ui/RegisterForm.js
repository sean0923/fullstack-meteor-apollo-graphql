import React, { Component } from 'react';
import styled from 'styled-components';
import { Accounts } from 'meteor/accounts-base';

const Form = styled.form`
  margin: 30px;
  padding: 30px;
  display: grid;
  width: 300px;
  grid-gap: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .25);

  & > button {
    justify-self: end;
  }
`;

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
`;

class RegisterForm extends Component {
  registerUser = e => {
    e.preventDefault();
    Accounts.createUser(
      {
        email: this.email.value,
        password: this.password.value,
      },
      err => {
        (!err && this.props.client.resetStore())
        console.log('here?');

        console.log('err: ', err);
      }
    );
  };

  render() {
    return (
      <Form onSubmit={this.registerUser}>
        <InputWrapper>
          <label>email: </label>
          <input type="email" ref={input => (this.email = input)} />
        </InputWrapper>
        <InputWrapper>
          <label>password: </label>
          <input type="password" ref={input => (this.password = input)} />
        </InputWrapper>
        <button type="submit">Register User</button>
      </Form>
    );
  }
}

export default RegisterForm;
