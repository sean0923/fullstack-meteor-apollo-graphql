import Resolutions from './Resolutions';

// Resolutions.insert({name: 'yeah~~'})

export default {
  Query: {
    resolutions(obj, args, context) {
      console.log('context: ', context);
      return Resolutions.find({}).fetch();
    },
  },

  Mutation: {
    createResolution(obj, args, context) {
      const resolutionId = Resolutions.insert({
        name: args.name,
      });
      return Resolutions.findOne(resolutionId);
    },
  },
};
