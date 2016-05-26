import React from 'react';
import { connect } from 'react-redux';
import TextArea from './textarea';
import Notifications from './notifications';

const App = () => {
   return (
      <div>
         <header> Declare a variable inside of a for loop.</header>
         <TextArea />
         <Notifications />
      </div>
   )
}

export default connect()(App);