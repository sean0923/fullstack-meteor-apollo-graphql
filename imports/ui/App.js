import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import { Accounts } from 'meteor/accounts-base';

import RegisterForm from './RegisterForm';
import ResolutionForm from './ResolutionForm';

const App = ({ loading, resolutions }) => {
  if (loading) return null;
  return (
    <div>
      <RegisterForm />

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
