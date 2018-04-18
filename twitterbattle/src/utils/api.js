import axios from 'axios';

const id = '85765946457c8c2c2885';
const sec = '9a4ad3b170b6b727802fe674c230198bb39bf0fe';
const params = `?client_id=${id}&client_secret=${sec}`;



function getProfile (username) {
  return axios.get(`https://api.github.com/users/${username + params}`)
    .then((user) => {
      return user.data;
    });
}

function getRepos (username) {
  return axios.get(`https://api.github.com/users/${username}/repos${params}&per_page=100`)
}

function getStarCount (repos) {
  return repos.data.reduce((count, repo) => {
    return count + repo.stargazers_count;
  }, 0)
}

function calculateScore (profile, repos) {
  let followers = profile.followers;
  let totalStars = getStarCount(repos);

  return (followers * 3) + totalStars;
}

function handleError (error) {
  console.warn(error);
  return null;
}

function getUserData (player) {
  return axios.all([
    getProfile(player),
    getRepos(player)
  ]).then((data) => {
    let profile = data[0];
    let repos = data[1];

    return {
      profile: profile,
      score: calculateScore(profile, repos)
    }
  })
}

function sortPlayers (players) {
  return players.sort((a,b) => b.score - a.score)
}

export const api = {
  battle: function (players) {
    return axios.all(players.map(getUserData))
      .then(sortPlayers)
      .catch(handleError)
  },
  fetchPopularRepos: function (language) {
    let SEARCHURL = 'https://api.github.com/search/repositories?q=stars:>1+language:'+
      language + '&sort=stars&order=desc&type=Repositories';
    const encodedURI = window.encodeURI(SEARCHURL);

    return axios.get(encodedURI)
      .then(resp => resp.data.items)
  }
};




