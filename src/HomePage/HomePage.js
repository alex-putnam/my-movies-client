import React, { Component } from 'react';
import './HomePage.css';

const stepsToWatch = 'To Watch: \n 1. \n 2.';

const stepsWatched = 'Watched: \n 1. \n 2.';

const stepsSearch = 'Search Movies: \n 1. \n 2.';

export default class HomePage extends Component {
  render() {
    return (
      <div className='container'>
        <div className='center'>
          <h1>Welcome User</h1>
          <h3>How to Use MyMovies:</h3>
          <p>{stepsToWatch}</p>
          <p>{stepsWatched}</p>
          <p>{stepsSearch}</p>
        </div>
      </div>
    );
  }
}
