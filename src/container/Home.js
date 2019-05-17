import React, { useState } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withHandlers } from 'recompose'
import {
  firestoreConnect,
  isLoaded,
  isEmpty
} from 'react-redux-firebase'
// import TodoItem from './TodoItem'
// import NewTodo from './NewTodo'

import Table from '../components/Table';

const enhance = compose(
  firestoreConnect([
    // Load todos from Firestore which are not done into redux
    // { collection: 'todos', where: ['done', '==', false] }
    { collection: 'movies' }
  ]),
  connect(
    ({ firestore }) => ({
      movies: firestore.ordered.movies,
    })
  ),
  withHandlers({
    addTodo: props => () =>
      props.firestore.add('todos', { text: 'sample', done: false })
  })
)

const Home = ({ firestore, movies, addTodo }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <div className='App'>
      <div className='App-todos'>
        <h4>Todos List</h4>
        {
          !isLoaded(movies)
            ? 'Loading'
            : isEmpty(movies)
            ? 'Todo list is empty'
            : <Table rows={movies} />
        }
        {/*<NewTodo />*/}
      </div>
    </div>
  )
};

export default enhance(Home);
