import { createServer } from "@graphql-yoga/node";
import { importSchema } from "graphql-import";
import resolvers from "./graphql/resolvers";

const typeDefs = importSchema("./graphql/schema.graphql");
// Create your server
const server = createServer({
  schema: {
    typeDefs,
    resolvers,
  },
});
server.start(() => console.log("start"));
