import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { render } from 'react-dom';
import App from './components/app';

const reducer = (state = {}, action = {}) => {
   return state
}

const RootReducer = combineReducers({reducer});

// const App = React.createClass({
//    render: function () {
//       return (<span>Hello World</span>)
//    }
// })

// const MyApp = connect()(App);


render(
  <Provider store={createStore(RootReducer)}>
   <App />
  </Provider>,
  document.getElementById('root')
);