export default function booksReducer(state, action){
  if (state===undefined){
    return {};
  }
  switch(action.type){
    case 'SET_BOOKS':
      return action.payload;
    default: 
    return state;
  }
}