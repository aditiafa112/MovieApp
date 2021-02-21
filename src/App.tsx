import React from 'react';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import store from './redux/stores';
import Router from './router';

const MainApp = () => {
  return (
    <>
      <Router />
      <FlashMessage position="top" />
    </>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
