import React from 'react';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { render } from 'react-dom';


const reducer = (state = {}, action = {}) => {
   return state
}

const RootReducer = combineReducers({reducer});

const App = React.createClass({
   render: function () {
      return (<span>Hello World</span>)
   }
})

const MyApp = connect()(App);


render(
  <Provider store={createStore(RootReducer)}>
   <MyApp />
  </Provider>,
  document.getElementById('root')
);