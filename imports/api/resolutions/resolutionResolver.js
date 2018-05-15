import Resolutions from './Resolutions';

// Resolutions.insert({name: 'yeah~~'})

export default {
  Query: {
    resolutions() {
      return Resolutions.find({}).fetch();
    },
  },

  Mutation: {
    createResolution() {
      console.log('server side ?');
      // dummy return
      return { _id: 'dummy_id', name: 'dummyName' };
    },
  },
};
