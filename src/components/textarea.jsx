import React from 'react';
import { connect } from 'react-redux';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/github';

const TextArea = React.createClass({
   updateCode: function(newCode) {
      console.log(newCode);
   },
   render: function() {
      const options = {
         lineNumbers: true
      };
      return (
         <div>
            <AceEditor
               mode="javascript"
               theme="github"
               onChange={this.updateCode}
               name="UNIQUE_ID_OF_DIV"
               editorProps={{$blockScrolling: true}}
               />
         </div>
      );
   }
});

export default connect()(TextArea);