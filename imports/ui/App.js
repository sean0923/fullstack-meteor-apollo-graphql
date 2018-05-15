import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const App = ({ data }) => {
  if (data.loading) return null;
  return (
    <div>
      <div>{data.hi}</div>
      <ul>
        {data.resolutions.map(resolution => {
          return <li key={resolution._id}>{resolution.name}</li>;
        })}
      </ul>
    </div>
  );
};

const hiQuery = gql`
  {
    hi
    resolutions {
      _id
      name
    }
  }
`;

export default graphql(hiQuery)(App);
