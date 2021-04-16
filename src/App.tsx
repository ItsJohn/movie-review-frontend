import React, {
  useCallback,
  useState,
  useEffect,
  useMemo,
} from 'react';
import { MovieType } from './types';
import MovieCard from './components/MovieCard/MovieCard';
import sampleData from './sampleData.json';
import './App.css';

const filterMovies = (movies: MovieType[] | undefined, value: string): MovieType[] => {
  if (value.length === 0 || !movies) {
    return movies || [];
  }
  return movies.filter((movie: MovieType) => {
    const lowercaseName = movie.name.toLowerCase();
    return lowercaseName.includes(value.toLowerCase());
  });
}

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState<MovieType[]>();

  useEffect(() => {
    // simulate backend call
    setMovies(sampleData);
  }, []);

  const handleChange = useCallback((evt: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(evt.currentTarget.value);
  }, []);

  const movieComponents = useMemo(() => (
    filterMovies(movies, searchValue)?.map((movie: MovieType) => (
      <MovieCard key={movie.name} movie={movie} />
    ))
  ), [movies, searchValue]);

  return (
    <div className="App">
      <input
        onChange={handleChange}
        value={searchValue}
      />
      {movieComponents}
    </div>
  );
}

export default App;
