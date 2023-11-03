import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import bodyParser from "body-parser";
import cors from "cors";
import { typeDefs } from "./schema.js";
import { resolvers } from "./resolver.js";

async function startServer() {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  app.use(bodyParser.json());
  app.use(cors());

  await server.start();
  app.use("/graphql", expressMiddleware(server));

  app.listen(8000, () => {
    console.log("server started on port http://localhost:8000/graphql");
  });
}

startServer();
