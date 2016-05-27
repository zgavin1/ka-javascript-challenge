export default {
   updateParsedCode: (string) => {
      return {type: "UPDATE_PARSED_CODE", parsedCode: string};
   },

   foundForLoop: () => {
      return {type: "FOUND_FOR_STATEMENT"};
   },
   foundWhileLoop: () => {
      return {type: "FOUND_WHILE_STATEMENT"};
   },
   foundVarDecNestedInForLoop: () => {
      return {type: "FOUND_VARDEC_NESTED_IN_FORLOOP"};
   },

   noFoundForLoop: () => {
      return {type: "NO_FOUND_FOR_STATEMENT"};
   },
   noFoundWhileLoop: () => {
      return {type: "NO_FOUND_WHILE_STATEMENT"};
   },
   noFoundNestedVarDecLoop: () => {
      return {type: "NO_FOUND_FOR_STATEMENT"};
   }
}