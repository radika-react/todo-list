function reducer(state = [], action) {
  if (action.type === "ADD_TODO") {
    return [...state, action.payload];
  } else if (action.type === "REMOVE_TODO") {
    return state.filter((todo) => todo.id !== action.payload.id);
  } else {
    return state;
  }
}

export default reducer;
