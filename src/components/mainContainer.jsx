import React from 'react';
import { connect } from 'react-redux';

import TextArea from './textarea';

const InputContainer = () => {
   return (
      <container className="container group">
         <h1> Declare a variable inside of a for loop.</h1>
         <TextArea />
      </container>
   );
}

export default connect()(InputContainer);