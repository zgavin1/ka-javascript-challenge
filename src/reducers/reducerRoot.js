import { combineReducers } from 'redux';

const defaultWatchedState = {
   ForStatement: false,
   WhileStatement: false,
   VariableDeclaration: false
}

const watched = (
   state = defaultWatchedState,
   action = {}
) => {
   switch (action.type) {
      default:
         return state
   }
}

// I'm calling state watched because I will be watching
// for these specific inputs, and need to be aware of their presence.
// The issue I know I'll encounter is updating to false 
// in the absence of a watched type


export default combineReducers({watched});