import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const IntroductionToGraphQL = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Introduction to GraphQL</div>
        <div className="description">
          GraphQL is a query language for APIs that allows clients to request only the data they need. This chapter introduces GraphQL and demonstrates how to build a GraphQL API
          using Node.js.
        </div>

        <div className="subHeader">What is GraphQL?</div>
        <div className="description">GraphQL is an alternative to REST, offering:</div>
        <ul className="list">
          <li>
            <b>Flexible Queries:</b> Clients specify the exact data they need.
          </li>
          <li>
            <b>Single Endpoint:</b> All queries are served from one endpoint.
          </li>
          <li>
            <b>Schema-based:</b> APIs are defined by a strongly-typed schema.
          </li>
        </ul>

        <div className="subHeader">Setting Up a GraphQL API</div>
        <div className="description">To get started, install the necessary libraries:</div>
        <Code language="bash" style={materialDark} showLineNumbers>{`npm install express express-graphql graphql`}</Code>

        <div className="subHeader">Defining a GraphQL Schema</div>
        <div className="description">A schema defines the structure of your API. Example:</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`const { buildSchema } = require('graphql');

// Define schema
const schema = buildSchema(\`
  type Query {
    hello: String
    add(x: Int, y: Int): Int
  }
\`);`}</Code>

        <div className="subHeader">Setting Up the GraphQL Server</div>
        <div className="description">Use `express-graphql` to create a GraphQL server:</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();

// Define schema
const schema = buildSchema(\`
  type Query {
    hello: String
    add(x: Int, y: Int): Int
  }
\`);

// Define resolvers
const root = {
  hello: () => 'Hello, World!',
  add: ({ x, y }) => x + y,
};

// Use express-graphql middleware
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true, // Enables GraphiQL interface
}));

app.listen(3000, () => {
  console.log('GraphQL server running at http://localhost:3000/graphql');
});`}</Code>

        <div className="subHeader">Testing Your GraphQL API</div>
        <div className="description">
          Open <b>http://localhost:3000/graphql</b> in your browser to access the GraphiQL interface. Example queries:
        </div>
        <Code language="graphql" style={materialDark} showLineNumbers>{`# Simple query
{
  hello
}

# Query with arguments
{
  add(x: 5, y: 3)
}`}</Code>

        <div className="subHeader">Adding Mutations</div>
        <div className="description">Mutations allow clients to modify data. Update the schema to include a mutation:</div>
        <Code language="javascript" style={materialDark} showLineNumbers>{`const schema = buildSchema(\`
  type Query {
    hello: String
    add(x: Int, y: Int): Int
  }

  type Mutation {
    createUser(name: String, email: String): User
  }

  type User {
    id: ID
    name: String
    email: String
  }
\`);

// Sample data
let users = [];
let idCounter = 1;

// Resolvers
const root = {
  hello: () => 'Hello, World!',
  add: ({ x, y }) => x + y,
  createUser: ({ name, email }) => {
    const user = { id: idCounter++, name, email };
    users.push(user);
    return user;
  },
};`}</Code>
        <div className="description">Example mutation in GraphiQL:</div>
        <Code language="graphql" style={materialDark} showLineNumbers>{`mutation {
  createUser(name: "John Doe", email: "john@example.com") {
    id
    name
    email
  }
}`}</Code>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use tools like Apollo Server for more advanced GraphQL features.</li>
          <li>Define clear schemas to make your API intuitive for clients.</li>
          <li>Paginate large datasets to optimize performance.</li>
          <li>Implement proper authentication and authorization for sensitive operations.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>GraphQL provides a flexible and efficient way to query APIs.</li>
          <li>Schemas and resolvers define the structure and behavior of your API.</li>
          <li>Tools like GraphiQL simplify testing and debugging of GraphQL APIs.</li>
        </ul>

        <Bottom back="/nodejs/performance-optimization" next="/nodejs/advanced-topics" />
      </div>
    </div>
  );
};

export default IntroductionToGraphQL;
