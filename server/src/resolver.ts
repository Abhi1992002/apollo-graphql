import axios from "axios";
export const resolvers = {
  Query: {
    getAllUsers: async () =>
      (await axios.get("https://dummyjson.com/users")).data.users,
    getUser: async (parent: any, { id }) =>
      (await axios.get(`https://dummyjson.com/users/${id}`)).data,
    searchUser: async (parent: any, { search }) =>
      (await axios.get(`https://dummyjson.com/users/search?q=${search}`)).data
        .users,
  },
};
