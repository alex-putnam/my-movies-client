import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { MovieCard } from '../MovieCard/MovieCard';

export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);
  return (
    <div className='movie-page'>
      <div className='container'>
        <div className='header'>
          <h1 className='heading'>My Movies To Watch</h1>
        </div>

        {watchlist.length > 0 ? (
          <div className='movie-grid'>
            {watchlist.map((movie) => (
              <MovieCard movie={movie} type='watchlist' key={movie.id} />
            ))}
          </div>
        ) : (
          <h2 className='no-movies'>No Movies For You To Watch!</h2>
        )}
      </div>
    </div>
  );
};
