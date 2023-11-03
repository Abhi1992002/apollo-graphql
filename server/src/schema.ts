export const typeDefs = `#graphql

   type User {
      id : ID!
      firstName : String! 
      image : String!
      lastName : String!
   }

   type FullUserDetail {
      id : ID!
      firstName : String
      image : String
      lastName : String
      age : String
      gender : String
      email : String
      phone : String
      username : String
      ip : String
      domain : String
      department : String
   }

   type Query {
        getAllUsers : [User]
        getUser(id: ID!) : FullUserDetail
        searchUser(search : String!) : [User]
   }

`;
