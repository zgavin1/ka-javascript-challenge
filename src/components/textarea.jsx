import React from 'react';
import { connect } from 'react-redux';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/github';

import test from './../testingApi';

const TextArea = React.createClass({

   updateCode: function(newCode) {
      test(this.props.lists, this.props.structures, newCode, this.props.dispatch);
   },

   render: function() {
      // debugger
      const options = {
         lineNumbers: true
      };
      return (
            <AceEditor
               mode="javascript"
               theme="github"
               onChange={this.updateCode}
               name="editor"
               value={this.props.parsedCode}
               editorProps={{$blockScrolling: true}}
               />
      );
   }
});

const select = (state) => {
   return {
      state: state,
      parsedCode: state.parsedCode,
      lists: state.lists,
      structures: state.structures
   }
}



export default connect(select)(TextArea);