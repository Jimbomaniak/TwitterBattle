import axios from 'axios';


export const api = {
  fetchPopularRepos: function (language) {
    let SEARCHURL = 'https://api.github.com/search/repositories?q=stars:>1+language:'+
      language + '&sort=stars&order=desc&type=Repositories';
    const encodedURI = window.encodeURI(SEARCHURL);

    return axios.get(encodedURI)
      .then(resp => resp.data.items)
  }
};




