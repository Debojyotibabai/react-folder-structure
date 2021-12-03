const endpoints = {
  auth: {
    signup: "/signup",
    signin: "/signin",
  },
  user: {
    getOne: (id) => `/users/${id}`,
  },
};

export default endpoints;
