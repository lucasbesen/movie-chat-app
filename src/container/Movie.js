import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import {withHandlers, withProps} from 'recompose'
import { get } from 'lodash';
import {
  firestoreConnect,
  isLoaded,
} from 'react-redux-firebase'
import Chat from '../components/Chat';

const enhance = compose(
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
  withHandlers({
    addComment: props => ({ comment }) => {
      const { firestore, movieId } = props;
      return firestore.collection('movies').doc(movieId).update({ 'comments': firestore.FieldValue.arrayUnion(comment) })
    },
  })
);

const Movie = ({ addComment, movie }) => {
  return (
    <>
      {!isLoaded(movie) ? 'Loading' : <Chat movie={movie} addComment={addComment} />}
    </>
  )
};

export default enhance(Movie);
