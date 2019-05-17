import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './core/store';
import Home from './container/Home';

import './App.css';

const initialState = { firebase: { authError: null } };
const store = configureStore(initialState);

console.log('xokxokx', store);

const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

export default App;
