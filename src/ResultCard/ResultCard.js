import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

const setVoteClass = (vote) => {
  if (vote >= 8) {
    return 'good';
  } else if (vote >= 6) {
    return 'average';
  } else {
    return 'bad';
  }
};

export const ResultCard = ({ movie }) => {
  const { addMovieToWatchlist, watchlist, watched } = useContext(GlobalContext);

  let storedMovie = watchlist.find((o) => o.id === movie.id);
  let storedMovieWatched = watched.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  return (
    <div className='result-card'>
      <div className='poster-wrapper'>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className='filler-poster'></div>
        )}
      </div>
      <div className='info'>
        <div className='header'>
          <h3 className='title'>{movie.title}</h3>
          <h4 className='release-date'>
            {movie.release_date ? movie.release_date.substring(0, 4) : '-'}
          </h4>
          <h5 className={'rating ' + setVoteClass(movie.vote_average)}>
            {movie.vote_average}
          </h5>
        </div>
        <div className='controls'>
          <button
            className='btn'
            onClick={() => addMovieToWatchlist(movie)}
            disabled={watchlistDisabled}
          >
            Add To Watch
          </button>
        </div>
      </div>
    </div>
  );
};
