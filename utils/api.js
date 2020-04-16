const api = {
  getUser(username) {
    const queryUrl = `https://api.github.com/users/${username}/events/public`;
    axios.get(queryUrl)

    console.log(response[0].payload.commits[0].author.email);
    
  }
};

module.exports = api;


