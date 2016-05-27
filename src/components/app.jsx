import React from 'react';
import { connect } from 'react-redux';
import MainContainer from './mainContainer';
import Notifications from './notifications';

const App = () => {
   return (
      <main>
         <MainContainer />
         <Notifications />
      </main>
   )
}

export default connect()(App);