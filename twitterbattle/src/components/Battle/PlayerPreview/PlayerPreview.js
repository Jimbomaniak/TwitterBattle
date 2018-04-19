import React from 'react'
import PropTypes from 'prop-types'

function PlayerPreview (props) {
  return (
    <div>
      <div className='column'>
        <a href={props.userurl}
           target="_blank" >
        <img className='avatar'
             src={props.avatar}
             alt={`Avatar for ${props.username}`}
        />
        </a>
        <h2 className='username'>{`@${props.username}`}</h2>
      </div>
      {props.children}
    </div>
  )
}

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  userurl: PropTypes.string.isRequired
};

export default PlayerPreview