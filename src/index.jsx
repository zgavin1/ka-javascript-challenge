import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from 'react-dom';
import App from './components/app';
import reducerRoot from './reducers/reducerRoot';

render(
  <Provider store={createStore(reducerRoot)}>
   <App />
  </Provider>,
  document.getElementById('root')
);