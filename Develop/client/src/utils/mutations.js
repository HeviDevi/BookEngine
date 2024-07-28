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

export const LOGIN_USER = gql`
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
authors: [String!]
description: String!
title: String!
image: String
link: String
}
`;

export const SAVE_BOOK = gql`
mutation saveBook($bookInput: BookInput!) {
  saveBook(bookInput: $bookInput){
  username
  email
  savedBooks {
  title
    }
  }
}
`;
