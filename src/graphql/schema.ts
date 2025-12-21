import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type User {
        id: Int
        name: String
        email: String
    }

    type Article {
        id: Int
        title: String
        content: String
        author: User
        createdAt: String
    }

    type Query {
        articles: [Article]
        article(id: Int!): Article
    }
`;
