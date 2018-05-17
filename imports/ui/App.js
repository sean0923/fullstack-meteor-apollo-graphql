import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import styled from 'styled-components';

import ResolutionForm from './ResolutionForm';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

const Btn = styled.button`
  padding: 8px 20px;
  background-color: rgba(200, 0, 0, .75);
  color: #fff;
  margin: 30px;
`;

const App = ({ loading, resolutions }) => {
  if (loading) return null;
  return (
    <div>
      <Btn onClick={() => Meteor.logout()}>Logout</Btn>
      <RegisterForm />
      <LoginForm />

      <hr />

      <ResolutionForm />
      <ul>
        {resolutions.map(resolution => {
          return <li key={resolution._id}>{resolution.name}</li>;
        })}
      </ul>
    </div>
  );
};

const resolutionQuery = gql`
  query resolutionQuery {
    hi
    resolutions {
      _id
      name
    }
  }
`;

export default graphql(resolutionQuery, {
  props: ({ data }) => ({ ...data }),
})(App);
