import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class ResolutionForm extends Component {
  submitForm = () => {
    console.log('this.name: ', this.name.value);
  };

  render() {
    console.log('this.props: ', this.props);
    return (
      <div>
        <input type="text" ref={input => (this.name = input)} />
        <button onClick={this.submitForm}>submit</button>
      </div>
    );
  }
}

const createResolution = gql`
  mutation createResolution {
    createResolution {
      _id
    }
  }
`;

export default graphql(createResolution, { name: 'createResolution' })(ResolutionForm);
