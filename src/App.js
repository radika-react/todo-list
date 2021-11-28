import "./App.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Cart from "./cart";
import Home from "./home";

const todoList = [
  {
    id: 1,
    description: "Learn React",
    status: "not-started",
  },
  {
    id: 2,
    description: "Learn Redux",
    status: "not-started",
  },
];

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Router>
      {/* <input type="text" /> <button> Add </button>
      {todoList.map((val, key) => {
        return (
          <div key={key} style={{ marginTop: "10px" }}>
            <p style={{ display: "inline", marginRight: "10px" }}>
              {val.description}{" "}
            </p>{" "}
            <button> Remove</button>
          </div>
        );
      })} */}
    </div>
  );
}

export default App;
