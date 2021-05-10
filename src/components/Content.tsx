import { useEffect, useState } from 'react'
import { MovieCard } from './MovieCard';
import { api } from '../services/api';

import '../styles/global.scss';


import '../styles/content.scss';


// interface MovieProps {
//   imdbID: string;
//   Title: string;
//   Poster: string;
//   Ratings: Array<{
//     Source: string;
//     Value: string;
//   }>;
//   Runtime: string;
// }

type ChildContentProps = {
  movies: Array<{
      imdbID: string;
      Title: string;
      Poster: string;
      Ratings: Array<{
        Source: string;
        Value: string;
      }>;
      Runtime: string;
  }>;
  selectedGenre: { 
    id: number;
    title: string;
  };
}

export function Content({movies, selectedGenre}:ChildContentProps) {
  // Complete aqui
  // const [movies, setMovies] = useState<MovieProps[]>([]);
  // const [selectedGenreId, setSelectedGenreId] = useState(1);
  // useEffect(() => {
  //   api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
  //     setMovies(response.data);
  //   });

   
  // }, [selectedGenreId]);

  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <main>
            <div className="movies-list">
              {movies.map(movie => (
                <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
              ))}
            </div>
          </main>
    </div>
  )
}