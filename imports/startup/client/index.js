import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';

import React from 'react';

const App = () => {
  return (
    <div>
      <div>Hello</div>
    </div>
  );
};

Meteor.startup(() => {
  render(<App />, document.getElementById('app'));
});
