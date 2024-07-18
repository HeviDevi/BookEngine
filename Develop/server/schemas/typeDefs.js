const typeDefs = `
  type Book {
  id: ID
  bookId: String
  title: String
  authors: [String]
  description: String
  link: String
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
  }
`;

module.exports = typeDefs;
