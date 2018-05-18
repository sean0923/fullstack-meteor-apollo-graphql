import Resolutions from './Resolutions';

// Resolutions.remove({});

export default {
  Query: {
    resolutions(obj, args, context) {
      // console.log('fetch data:', Resolutions.find({ userId: context.userId }).fetch());
      return Resolutions.find({ userId: context.userId }).fetch();
    },
  },

  Mutation: {
    createResolution(obj, args, context) {
      const resolutionId = Resolutions.insert({
        name: args.name,
        userId: context.userId || null,
      });
      return Resolutions.findOne(resolutionId);
    },
  },
};
