import queryString from 'query-string';

import movies from "../core/movies";

export const formatRuntime = (runtime) => Math.floor(runtime / 60) + 'h ' + runtime % 60 + 'm';

export const formatRevenue = (revenue) => revenue ? `$${revenue} M` : '-';

export const addFilter = (filterName, value, location) => {
  const parsed = queryString.parse(location.search);
  const search = {
    ...parsed,
    [filterName]: value,
  };
  return `?${queryString.stringify(search)}`;
};

export const getGenres = () => {
  const genresArray = [];
  movies.map(movie => movie.genre.map(genre => !genresArray.includes(genre) && genresArray.push(genre)));
  return genresArray;
};

export const getMovies = (location) => {
  const search = queryString.parse(location.search);
  let filteredMovies = [...movies];
  if (search && search.title) {
    filteredMovies = filteredMovies.filter(movie => movie.title.includes(search.title));
  }
  if (search && search.genre) {
    filteredMovies = filteredMovies.filter(movie => movie.genre.includes(search.genre));
  }

  return filteredMovies;
};