// @flow
import queryString from 'query-string';
import type { RouteComponentProps } from 'react-router-dom';

import movies from '../core/movies';

export type Movie = {
  title: string,
  year: number,
  runtime: number,
  revenue: number,
  rating: number,
  genre: string[],
};

export type Comment = {
  title: string,
  message: string,
};

export const formatRuntime = (runtime: number): string => Math.floor(runtime / 60) + 'h ' + (runtime % 60) + 'm';

export const formatRevenue = (revenue: number): string => (revenue ? `$${revenue} M` : '-');

export const addFilter = (filterName: string, value: string, location: RouteComponentProps) => {
  const parsed = queryString.parse(location.search);
  const search = {
    ...parsed,
    [filterName]: value,
  };
  return `?${queryString.stringify(search)}`;
};

export const getGenres = (): string[] => {
  const genresArray = [];
  movies.map(movie => movie.genre.map(genre => !genresArray.includes(genre) && genresArray.push(genre)));
  return genresArray;
};

export const getMovies = (location: RouteComponentProps): Movie[] => {
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

export const paginateResult = (movies: Movie[], location: RouteComponentProps): Movie[] => {
  let filteredMovies = [...movies];
  const search = queryString.parse(location.search);
  if (search && search.page) {
    const index = 10 * search.page;
    if (index === -1) {
      filteredMovies = filteredMovies.slice(0, 10);
    } else {
      filteredMovies = filteredMovies.slice(index, index + 10);
    }
  } else {
    filteredMovies = filteredMovies.slice(0, 10);
  }
  return filteredMovies;
};
