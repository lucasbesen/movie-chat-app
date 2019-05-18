import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import {
  firestoreConnect,
  isLoaded,
} from 'react-redux-firebase'

import Table from '../components/Table';

const enhance = compose(
  firestoreConnect(({ location }) => {
    const search = queryString.parse(location.search);
    if (search && search.title) {
      return [
        { collection: 'movies',
          where: ['title', '>=', search.title]}
      ]
    }
    return [
      { collection: 'movies' },
    ];
  }),
  connect(
    ({ firestore }) => ({
      movies: firestore.ordered.movies,
    })
  ),
);

const Home = ({ history, movies }) => {
  return (
    <>
      {
        !isLoaded(movies) ? 'Loading' : <Table rows={movies} onFilterByTitle={value => history.push({ pathname: '/', search: `?title=${value}` })} onRowClick={id => history.push(`/movie/${id}`)} />
      }
    </>
  )
};

export default enhance(withRouter(Home));
