const axios = require("axios");

const api = {
  getUser(username) {
    try {
      const queryUrl = `https://api.github.com/users/${username}/events/public`;
      return axios.get(queryUrl).then(function(response) {
        return{
          email: response.data[0].payload.commits[0].author.email,
          name:  response.data[0].payload.commits[0].author.name,
          image: response.data[0].actor.avatar_url,
        };
      });
    } catch (error) {
      console.log("Username not Valid");
    }
  }
};

module.exports = api;