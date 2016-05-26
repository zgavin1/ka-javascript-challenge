import esprima from 'esprima';
import walk from 'esprima-walk';


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
         dispatch({type: "FOUND_FOR_STATEMENT"});
         break;
      case "WhileStatement":
         console.log("You've used a 'while' loop.");
         blacklist.whileStatement = true
         dispatch({type: "FOUND_WHILE_STATEMENT"});
         break;
      case "VariableDeclaration":
         if (node.parent.type === "BlockStatement" && node.parent.parent.type === "ForStatement") {
            dispatch({type: "FOUND_VARDEC_NESTED_IN_FORLOOP"});
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
   // debugger
   dispatch({type: "UPDATE_PARSED_CODE", parsedCode: string})

   let whitelist = {forStatement: false};
   let blacklist = {whileStatement: false};
   let localStructure = false;
   // walk the nodes with esprima-walk, dispatching actions for watched properties
   walk.walkAddParent(parsed, walkCallback.bind(null, dispatch, whitelist, blacklist, structures));


   // the next two conditions check to see if this specific walk through the nodes
   // found the types on our lists. If not, it updates accordingly
   if (!whitelist.forStatement && lists.whitelist.forStatement) {
      dispatch({type: "NO_FOUND_FOR_STATEMENT"});
   }
   if (!blacklist.whileStatement && lists.blacklist.whileStatement) {
      dispatch({type: "NO_FOUND_WHILE_STATEMENT"});
   }
   if (!localStructure && structures.varDeclNestedInForLoop) {
      dispatch({type: "NO_FOUND_VARDEC_NESTED_IN_FORLOOP"});
   }
};

export default parseCode;