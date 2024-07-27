const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    id: ID
    bookId: String
    title: String
    authors: [String]
    description: String
    link: String
  }

  type Query {
    books: [Book]
    book(bookId: ID!): Book
    bookAuthors(authors: [String]): [Book]
  }
  
  type Auth {
    token: ID!
    user: User
    }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]
  }

  type Query {
    users: [User]
    me: User
  }
 
  


    type Mutation {
      
      addUser(name: String!, email: String!, password: String!): Auth
      login(email: String!, password: String!): Auth   
      saveBook(bookId: ID!): User
      removeBook(bookId: ID!): User
    }
`;

module.exports = typeDefs;
