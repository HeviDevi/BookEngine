const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    users: async () => {
      return await User.find({});
    },
  },
  
  Mutation: {
    addUser: async (parent, {username, email, password}) => {
      const user = await User.create(username, email, password);
      const token = signToken(user);
      return { token, user };
    }
  }


};

module.exports = resolvers;
//,user: async (parent, { username}) => {
  //return await User.findOne({ username : username})
//}