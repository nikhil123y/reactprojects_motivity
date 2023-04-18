import "./App.css";
import Home from "./Home";
import Header from "./Header";
// import Login from "./Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CheckOut from "./CheckOut";

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>

          <Route path="/checkout">
            <Header />
            <CheckOut/>
          </Route>

          <Route path="/">    
            <Header />
            <Home />
          </Route>

        </Switch>

      </Router>

    </div>
  );
}

export default App;
