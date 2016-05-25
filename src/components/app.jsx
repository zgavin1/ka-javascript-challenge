import React from 'react';
import { connect } from 'react-redux';
import TextArea from './textarea';
import Notifications from './notifications';

const App = () => {
   return (
      <div>
         <TextArea />
         <Notifications />
      </div>
   )
}

export default connect()(App);