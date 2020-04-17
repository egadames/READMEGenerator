// Loading the axios js function
const axios = require("axios");

// This contains the axios request to the github API
// The username is loaded and put into the URL
// Information about that user is obtained from the API
// That is info is loaded into an object and returned
const api = {
  getUser(username) {
    try {
      const queryUrl = `https://api.github.com/users/${username}/events`;
      return axios.get(queryUrl).then(function(response) {
        return{
          email: response.data[0].payload.commits[0].author.email,
          name:  response.data[0].payload.commits[0].author.name,
          image: response.data[0].actor.avatar_url
        };
      });
    } catch (error) {
      console.log("Username not Valid");
    }
  }
};

// This exports the function
module.exports = api;