import React from "react";
import { Link } from "react-router-dom";
import store from "./reudx/store";

export default function Home() {
  //   const dispatch = useDispatch();

  return (
    <div style={{ paddingTop: "50px" }}>
      <Link to="/cart"> Cart</Link>
      <br />
      <br />
      <br />
      I'm Home
      <br />
      <br />
      <br />
      <button
        onClick={() =>
          store.dispatch({
            type: "ADD_TODO",
            payload: {
              id: 1,
              description: "Learn Functional Programing",
              statues: "completed",
            },
          })
        }
      >
        {" "}
        Add TO Redux
      </button>
    </div>
  );
}
