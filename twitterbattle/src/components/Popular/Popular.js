import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { api } from '../../utils/api'


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
    api.fetchPopularRepos(this.state.selectedLanguage)
      .then((repos) => console.log(repos))
  }

  updateLanguage = (lang) =>  {
    this.setState({selectedLanguage: lang})
  };

  render() {
    return (
      <div>
        <SelectLanguage selectedLanguage={this.state.selectedLanguage}
                        onSelect={this.updateLanguage}/>
      </div>
    )
  }
}

export default Popular