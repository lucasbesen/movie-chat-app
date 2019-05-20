import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';

import configureStore from './core/store';
import AppRouter from './AppRouter';

import Header from './components/Header';

import './App.css';

const AppWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
`;

const App = () => {
  const initialState = { firebase: { authError: null } };
  const store = configureStore(initialState);

  return (
    <Provider store={store}>
      <AppWrapper>
        <Header />
        <ContentWrapper>
          <AppRouter />
        </ContentWrapper>
      </AppWrapper>
    </Provider>
  );
};

export default App;
