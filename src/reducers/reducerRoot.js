import { combineReducers } from 'redux';

const parsedCode= (
   state = "",
   action
) => {
   switch (action.type) {
      case "UPDATE_PARSED_CODE":
         return action.parsedCode;
      default:
         return state;
   }
}

const defaultBlacklist = {whileStatement: false}
const defaultWhitelist = {forStatement: false}
const defaultState = {
   blacklist: defaultBlacklist,
   whitelist: defaultWhitelist
}

const whitelist = (
   state,
   action
) => {
   switch (action.type) {
      case "FOUND_FOR_STATEMENT":
         return {forStatement: true};
      case "NO_FOUND_FOR_STATEMENT":
         return {forStatement: false};
      default:
         return state;
   }
}

const blacklist = (
   state,
   action
) => {
   switch (action.type) {
      case "FOUND_WHILE_STATEMENT":
         return {whileStatement: true};
      case "NO_FOUND_WHILE_STATEMENT":
         return {whileStatement: false};
      default:
         return state;
   }
}

const lists = (
   state = defaultState,
   action
) => {
   switch (action.type) {
      case "FOUND_WHILE_STATEMENT":
         return { ...state, blacklist: blacklist(undefined, action) };
      case "FOUND_FOR_STATEMENT":
         return { ...state, whitelist: whitelist(undefined, action) };
      case "NO_FOUND_WHILE_STATEMENT":
         return { ...state, blacklist: blacklist(undefined, action) };
      case "NO_FOUND_FOR_STATEMENT":
         return { ...state, whitelist: whitelist(undefined, action) };
      default:
         return state
   }
}

const defaultStructureState = {
   varDeclNestedInForLoop: false
}

const structures = (
   state = defaultStructureState,
   action
) => {
   switch (action.type) {
      case "FOUND_VARDEC_NESTED_IN_FORLOOP":
         return {
            varDeclNestedInForLoop: true
         }
      case "NO_FOUND_VARDEC_NESTED_IN_FORLOOP":
         return {
            varDeclNestedInForLoop: false
         }
      default:
         return state;
   }
}


export default combineReducers({
   lists,
   structures,
   parsedCode
});