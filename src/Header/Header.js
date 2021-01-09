import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className='container'>
          <div className='inner-content'>
            <div className='main'>
              <Link to='/'>MyMovies</Link>
            </div>
            <ul className='nav-links'>
              <li>
                <Link to='/watchlist'>To Watch</Link>
              </li>
              <li>
                <Link to='/watched'>Watched</Link>
              </li>
              <li>
                <Link to='/search'>Search Movies</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}
