import React from 'react';
import { connect } from 'react-redux';

const TextArea = React.createClass({
   render: function () {
      return (<span>TextArea Hello World</span>)
   }
})

export default connect()(TextArea);