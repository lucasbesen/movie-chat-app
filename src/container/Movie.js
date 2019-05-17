import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withProps } from 'recompose'
import { withRouter } from 'react-router-dom';
import { get } from 'lodash';
import {
  firestoreConnect,
  isLoaded,
} from 'react-redux-firebase'

const enhance = compose(
  withRouter,
  withProps(({ match: { params: { movieId } } }) => ({
    movieId
  })),

  firestoreConnect(({ movieId }) => [
    {
      collection: 'movies',
      doc: movieId
    }
  ]),
  connect(({ firestore: { data } }, { movieId }) => ({
    movie: get(data, `movies.${movieId}`)
  })),
);

const Movie = ({ movie }) => {
  console.log('movie', movie);
  return (
    <div className='App'>
      <div className='App-todos'>
        <h4>Todos List</h4>
        {!isLoaded(movie) ? 'Loading' : movie.comments.map(comment => (<p>{comment}</p>))}
      </div>
    </div>
  )
};

export default enhance(withRouter(Movie));
