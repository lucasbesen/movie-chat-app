import { createStore, compose } from 'redux';
import { reactReduxFirebase } from 'react-redux-firebase';
import { reduxFirestore } from 'redux-firestore';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import firebase from 'firebase/app';

import rootReducer from './reducer';

const configureStore = () => {
  firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  });

  const createStoreWithMiddleware = compose(
    reactReduxFirebase(firebase, {
      userProfile: 'users',
      useFirestoreForProfile: true,
      enableLogging: false,
    }),
    reduxFirestore(firebase),
  )(createStore);

  const store = createStoreWithMiddleware(rootReducer);

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const nextRootReducer = require('./reducer');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
