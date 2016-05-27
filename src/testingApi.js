import esprima from 'esprima';
import walk from 'esprima-walk';

import actions from './actions/actionCreators';


const walkCallback = (
  dispatch,
  whitelist,
  blacklist,
  structures,
  node
) => {
   switch (node.type) {
      case "ForStatement":
         console.log("You've used a for loop.");
         whitelist.forStatement = true;
         dispatch(actions.foundForLoop());
         break;
      case "WhileStatement":
         console.log("You've used a 'while' loop.");
         blacklist.whileStatement = true
         dispatch(actions.foundWhileLoop());
         break;
      case "VariableDeclaration":
         if (node.parent.type === "BlockStatement" && node.parent.parent.type === "ForStatement") {
            dispatch(actions.foundVarDecNestedInForLoop());
            structures = true;
         }
         break;
      default:
         return node;
   }
};


const parseCode = (lists, structures, string, dispatch) => {
   let parsed;
   try {
      parsed = esprima.parse(string);
   } catch(err) {
      return;
   }
   dispatch(actions.updateParsedCode(string))

   let whitelist = {forStatement: false};
   let blacklist = {whileStatement: false};
   let localStructure = false;
   // walk the nodes with esprima-walk, dispatching actions for watched properties
   walk.walkAddParent(parsed, walkCallback.bind(null, dispatch, whitelist, blacklist, structures));


   // the next two conditions check to see if this specific walk through the nodes
   // found the types on our lists. If not, it updates accordingly
   if (!whitelist.forStatement && lists.whitelist.forStatement) {
      dispatch(actions.noFoundForLoop());
   }
   if (!blacklist.whileStatement && lists.blacklist.whileStatement) {
      dispatch(actions.noFoundWhileLoop());
   }
   if (!localStructure && structures.varDeclNestedInForLoop) {
      dispatch(actions.noFoundNestedVarDecLoop());
   }
};

export default parseCode;