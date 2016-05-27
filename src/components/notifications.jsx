import React from 'react';
import { connect } from 'react-redux';

const Notifications = React.createClass({
   handleBlacklistLabel: function (blacklist) {
      // whitelist={forStatement: false}
      if (blacklist.whileStatement) {
         return (
            <div>
               You can`t use a while loop
            </div>
         );
      }
   },

   handleWhitelistLabel: function (whitelist) {
      if (!whitelist.forStatement) {
         return (
            <div>
               You need a 'for' loop.
            </div>
         );
      }
   },

   handleStructureLabel: function (structures) {
      if (!structures.varDeclNestedInForLoop) {
         return (
            <div>
               You need a variable declaration nested in your loop!
            </div>
         );
      }
   },

   render: function () {
      const whitelistLabel = this.handleWhitelistLabel(this.props.lists.whitelist);
      const blacklistLabel = this.handleBlacklistLabel(this.props.lists.blacklist);
      const structuresLabel = this.handleStructureLabel(this.props.structures);

      return (
         <div className="notifications">
            {whitelistLabel}
            {blacklistLabel}
            {structuresLabel}
         </div>
      );
   }
});

const select = (state) => {
   return {
      lists: state.lists,
      structures: state.structures
   }
}

export default connect(select)(Notifications);