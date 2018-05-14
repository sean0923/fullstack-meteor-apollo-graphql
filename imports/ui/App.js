import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const App = ({ data }) => {
  return (
    <div>
      <div>{data.hi}</div>
    </div>
  );
};

const hiQuery = gql`
  {
    hi
  }
`;

export default graphql(hiQuery)(App);
