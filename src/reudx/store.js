import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import todoListReducer from "./reducers/todoListReducer";
// import rootReducer from "./reducers/rootReducer";
import reducer from "./reducer";
const store = createStore(
  reducer
  //   applyMiddleware(thunk)
  // composeWithDevTools(applyMiddleware())
);

export default store;
