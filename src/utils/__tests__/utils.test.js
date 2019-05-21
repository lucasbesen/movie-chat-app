import queryString from 'query-string';

import { getMovies, getGenres, paginateResult, addFilter, formatRevenue, formatRuntime } from '../';

it('should return movies filtered by title', () => {
  const location = {
    search: queryString.stringify({ title: 'Passengers' }),
  };
  const movies = getMovies(location);
  expect(movies).toMatchSnapshot();
});

it('should return movies filtered by genre', () => {
  const location = {
    search: queryString.stringify({ genre: 'Fantasy' }),
  };
  const movies = getMovies(location);
  expect(movies).toMatchSnapshot();
});

it('should return all genres', () => {
  const genres = getGenres();
  expect(genres).toMatchSnapshot();
});

it('should paginate movies', () => {
  const location = {
    search: queryString.stringify({ genre: 'Fantasy', page: 3 }),
  };
  const movies = getMovies(location);
  const paginated = paginateResult(movies, location);
  expect(paginated).toMatchSnapshot();
});

it('should add a filter', () => {
  const location = {
    search: queryString.stringify({ genre: 'Fantasy' }),
  };
  const filters = addFilter('title', 'Passengers', location);
  expect(filters).toMatchSnapshot();
});

it('should format runtime', () => {
  const formattedRuntime = formatRuntime(123);
  expect(formattedRuntime).toMatchSnapshot();
});

it('should format revenue', () => {
  const formattedRevenue = formatRevenue(12);
  expect(formattedRevenue).toMatchSnapshot();
});
