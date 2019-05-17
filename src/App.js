import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './core/store';
import AppRouter from './AppRouter';

import './App.css';

const initialState = { firebase: { authError: null } };
const store = configureStore(initialState);

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default App;
