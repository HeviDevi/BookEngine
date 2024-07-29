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
      
      console.log("Inside signup resolver");
      console.log(username);

      const user = await User.create({username, email, password});
      console.log(user)
      
      const token = signToken(user);
      
      return { token, user };
    },
    login: async (parent, {email, password}) => {
      console.log("Inside login resolver");
      console.log(email);
      const user = await User.findOne({ email })
      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }
      const isCorrectPassword = await user.isCorrectPassword(password);
      console.log("Password Accepted", isCorrectPassword);

      if (!isCorrectPassword) {
        throw new AuthenticationError('Incorrect password');
      }
      const token = signToken(user);
      console.log("Created Token", token);
      return { token, user };
    },
    saveBook: async (parent, {BookInput}) => {
      console.log('inside save book resolver');
      console.log(BookInput);

    }
  },
};

module.exports = resolvers;
//,user: async (parent, { username}) => {
  //return await User.findOne({ username : username})
//}