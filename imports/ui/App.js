import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { withApollo } from 'react-apollo';
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

const handleLogout = client => {
  Meteor.logout();
  client.resetStore();
};

const renderLogInAndOut = (user, client) => {
  if (user) {
    return <Btn onClick={() => handleLogout(client)}>Logout</Btn>;
  }
  return (
    <div>
      <RegisterForm client={client} />
      <LoginForm client={client} />
    </div>
  );
};

const App = ({ loading, resolutions, client, user }) => {
  if (loading) return null;

  return (
    <div>
      {renderLogInAndOut(user, client)}

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
    resolutions {
      _id
      name
      userId
    }
    user {
      _id
      email
    }
  }
`;

export default graphql(resolutionQuery, {
  props: ({ data }) => ({ ...data }),
})(withApollo(App));
