import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import ResolutionForm from './ResolutionForm';

const App = ({ data }) => {
  if (data.loading) return null;
  return (
    <div>
      <ResolutionForm />
      <div>{data.hi}</div>
      <ul>
        {data.resolutions.map(resolution => {
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

export default graphql(resolutionQuery)(App);
