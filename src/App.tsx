import React, {useEffect} from 'react';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import store from './redux/stores';
import Router from './router';
import codePush from 'react-native-code-push';

const MainApp = () => {
  return (
    <>
      <Router />
      <FlashMessage position="top" />
    </>
  );
};

const App = () => {
  useEffect(() => {
    codePush.sync({
      installMode: codePush.InstallMode.IMMEDIATE,
    });
  }, []);
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

let codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_START,
  installMode: codePush.InstallMode.IMMEDIATE,
};

export default codePush(codePushOptions)(App);
