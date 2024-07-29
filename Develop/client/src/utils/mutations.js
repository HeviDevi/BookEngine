import { gql } from "@apollo/client";

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
  token
  user {
    username
    email
    }
  }
}
`;

export const LOGIN = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
    token
    user {
      username
    }
  }
} 
`;

export const typeDefs = gql`
input BookInput {
bookId: ID!
description: String!
authors: [String!]
title: String!
image: String
link: String
}
`;

export const SAVE_BOOK = gql`
mutation saveBook($BookInput: BookInput!) {
  saveBook(BookInput: $BookInput){
  username
  email
  savedBooks {
  title
    }
  }
}
`;
