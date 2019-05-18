import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';

import configureStore from './core/store';
import AppRouter from './AppRouter';

import './App.css';

const initialState = { firebase: { authError: null } };
const store = configureStore(initialState);

const App = () => (
  <Provider store={store}>
    <AppWrapper>
      <p>Movie chat application for Turtle.AI</p>
      <AppRouter />
      <p>Made by @lucasbesen</p>
    </AppWrapper>
  </Provider>
);

const AppWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export default App;
