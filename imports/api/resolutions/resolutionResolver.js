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
      // 
    }
  }
};
