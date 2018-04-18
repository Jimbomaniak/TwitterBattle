import React from 'react';
import {NavLink} from 'react-router-dom';


function NavBar () {
  return (
    <ul className='nav'>
      <li>
        <NavLink exact activeClassName='active' to='/TwitterBattle'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to={'/TwitterBattle/battle'}>
          Battle
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to={'/TwitterBattle/popular'}>
          Popular
        </NavLink>
      </li>
    </ul>
  )
}

export default NavBar