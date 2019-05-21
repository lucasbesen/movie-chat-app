// @flow
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withHandlers, withProps } from 'recompose';
import CircularProgress from '@material-ui/core/CircularProgress';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';

import Chat from '../components/Chat';

type Props = {
  comments: string[],
  addComment: () => void,
};

const Movie = ({ addComment, comments }: Props) => (
  <>{!isLoaded(comments) ? <CircularProgress /> : <Chat comments={comments} addComment={addComment} />}</>
);

const enhance = compose(
  withProps(({ match: { params: { movieId } } }) => ({
    movieId,
  })),
  firestoreConnect(({ movieId }) => [
    {
      collection: 'comments',
      where: ['movie', '==', movieId],
    },
  ]),
  connect(({ firestore }) => ({
    comments: firestore.ordered.comments,
  })),
  withHandlers({
    addComment: props => ({ comment }) => {
      const { firestore, movieId } = props;
      if (comment) {
        return firestore.add({ collection: 'comments' }, { movie: movieId, message: comment });
      }
    },
  }),
);

export default enhance(Movie);
