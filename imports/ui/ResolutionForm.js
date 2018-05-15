import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class ResolutionForm extends Component {
  submitForm = () => {
    console.log('this.name: ', this.name.value);
  }

  render() {
    return (
      <div>
        <input type="text" ref={input => (this.name = input)} />
        <button onClick={this.submitForm}>submit</button>
      </div>
    );
  }
}

export default ResolutionForm;
