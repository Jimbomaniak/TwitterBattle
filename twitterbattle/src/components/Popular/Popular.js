import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { api } from '../../utils/api';
import Loading from '../Loading/Loading';

function SelectLanguage (props) {
  const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
    <ul className='languages'>
      {languages.map(lang => <li
        style={lang === props.selectedLanguage ? {color : '#d0021b'} : null}
        onClick={props.onSelect.bind(null, lang)}
        key={lang}>{lang}</li>)}
    </ul>
  )

}

function RepoGrid (props) {
  return (
    <ul className='popular-list'>
      {props.repos.map((repo, index) => {
        return (
          <li key={repo.name} className='popular-item'>
            <div className='popular-rank'> #{index + 1}</div>
            <ul className='space-list-items'>
              <li>
                <a href={repo.html_url} target='_blank'>
                <img className='avatar'
                     src={repo.owner.avatar_url}
                     alt={`Avatar for ${repo.owner.login}`} />
                </a>
              </li>
              <li>
                <a href={repo.html_url}>{repo.name}</a>
              </li>
              <li>@{repo.owner.login}</li>
              <li>{repo.stargazers_count} stars</li>
            </ul>
        </li>
        )
      })
      }
    </ul>
  )
}

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired
};



SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};


class Popular extends Component {
  state = {
    selectedLanguage: 'All',
    repos: null
  };

  componentDidMount() {
    console.log('------', 'mount');
    this.updateLanguage(this.state.selectedLanguage)
  }


  updateLanguage = (lang) =>  {
    this.setState({
      selectedLanguage: lang,
      repos: null
    });

    api.fetchPopularRepos(lang)
      .then((repos) => this.setState({repos: repos}))
  };

  render() {
    return (
      <div className='popular'>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
        {!this.state.repos ? <Loading text='Downloading'/> :
          <RepoGrid repos={this.state.repos} />}

      </div>
    )
  }
}

export default Popular