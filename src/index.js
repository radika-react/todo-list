import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import store from "./reudx/store";
import reportWebVitals from "./reportWebVitals";
import store from "./reudx/store";
import { Provider } from "react-redux";

console.log(store);

const unsubscribe = store.subscribe(() => {
  console.log("Store Changed", store.getState());
});
// store.dispatch({
//   type: "ADD_TODO",
//   payload: {
//     id: 1,
//     description: "Learn Functional Programing",
//     statues: "completed",
//   },
// });

// unsubscribe();
// store.dispatch({
//   type: "REMOVE_TODO",
//   payload: {
//     id: 1,
//   },
// });

// console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
