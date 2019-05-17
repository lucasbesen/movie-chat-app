import { createStore, compose } from 'redux';
import { reactReduxFirebase } from 'react-redux-firebase';
import { reduxFirestore } from 'redux-firestore';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import firebase from 'firebase/app';

import rootReducer from './reducer'
import { firebaseConfig } from '../config';

export default function configureStore (initialState, history) {
  firebase.initializeApp(firebaseConfig);

  const createStoreWithMiddleware = compose(
    reactReduxFirebase(firebase,
      {
        userProfile: 'users',
        useFirestoreForProfile: true,
        enableLogging: false
      }
    ),
    reduxFirestore(firebase),
)(createStore);

  const store = createStoreWithMiddleware(rootReducer)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducer', () => {
      const nextRootReducer = require('./reducer');
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
