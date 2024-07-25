const { User } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({});
    }
  },



};

module.exports = resolvers;
//,user: async (parent, { username}) => {
  //return await User.findOne({ username : username})
//}