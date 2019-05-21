import React from 'react';
import { withRouter } from 'react-router-dom';

import Table from '../components/Table';
import { addFilter, getMovies } from '../utils';

const Home = ({ history, location }) => (
  <>
    <Table
      rows={getMovies(location)}
      onFilterByTitle={value => history.push({ pathname: '/', search: addFilter('title', value, location) })}
      handlePageChange={value => history.push({ pathname: '/', search: addFilter('page', value, location) })}
      onFilterByGenre={value => history.push({ pathname: '/', search: addFilter('genre', value, location) })}
      onRowClick={id => history.push(`/movie/${id}`)}
    />
  </>
);

export default withRouter(Home);
