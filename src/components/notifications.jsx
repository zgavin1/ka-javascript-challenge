import React from 'react';
import { connect } from 'react-redux';

const Notifications = React.createClass({
   render: function () {
      return (<span>Notifications Hello World</span>)
   }
})

export default connect()(Notifications);