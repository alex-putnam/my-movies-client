import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { MovieCard } from '../MovieCard/MovieCard';

export const Watched = () => {
  const { watched } = useContext(GlobalContext);
  return (
    <div className='movie-page'>
      <div className='container'>
        <div className='header'>
          <h1 className='heading'>My Watched Movies</h1>
        </div>

        {watched.length > 0 ? (
          <div className='movie-grid'>
            {watched.map((movie) => (
              <MovieCard movie={movie} type='watched' key={movie.id} />
            ))}
          </div>
        ) : (
          <h2 className='no-movies'>No Movies Watched, Start Watching!</h2>
        )}
      </div>
    </div>
  );
};
