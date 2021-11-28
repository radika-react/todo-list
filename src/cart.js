import React from "react";
import { Link } from "react-router-dom";
import store from "./reudx/store";

export default function Cart() {
  const [todo, setTodo] = React.useState([]);
  //   const unsubscribe = store.subscribe(() => {
  //     console.log("Store Changed", store.getState());
  //   });

  React.useEffect(() => {
    console.log(store.getState());
    setTodo(store.getState());
  }, []);

  return (
    <div>
      <Link to="/"> Back </Link>
      {todo.map((val, key) => {
        return <p key={key}> {val.description}</p>;
      })}
    </div>
  );
}
