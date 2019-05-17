import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import {
  firestoreConnect,
  isLoaded,
  isEmpty
} from 'react-redux-firebase'

import Table from '../components/Table';

const enhance = compose(
  firestoreConnect([
    { collection: 'movies' }
  ]),
  connect(
    ({ firestore }) => ({
      movies: firestore.ordered.movies,
    })
  ),
);

const Home = ({ movies, history }) => {
  return (
    <div className='App'>
      <div className='App-todos'>
        <h4>Todos List</h4>
        {
          !isLoaded(movies)
            ? 'Loading'
            : isEmpty(movies)
            ? 'Todo list is empty'
            : <Table rows={movies} onRowClick={id => history.push(`/movie/${id}`)} />
        }
      </div>
    </div>
  )
};

export default enhance(withRouter(Home));
