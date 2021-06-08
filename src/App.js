import { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import Reminders from "./Reminders";
import Dogs from "./Dogs";
import Countries from "./Countries";
import Rockps from "./Rockps";
import Shoppinglist from "./Shoppinglist";
import StopWatch from "./StopWatch";
import Books from "./Books";
import People from "./People";

import NotFound from "./NotFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Fun React Challanges</h1>
        <nav>
          <ul className="nav-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/StopWatch">StopWatch</Link>
            </li>
            <li>
              <Link to="/Rockps">Rock Paper Scissors game</Link>
            </li>
            <li>
              <Link to="/Shoppinglist">Shoppinglist</Link>
            </li>
            <li>
              <Link to="/Books">Books search</Link>
            </li>
            <li>
              <Link to="/People">People</Link>
            </li>
            <li>
              <Link to="/countries">Countries API with search</Link>
            </li>
            <li>
              <Link to="/dogs">Dogs API with Router</Link>
            </li>
            <li>
              <Link to="/Reminders">Reminders</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/Countries" component={Countries} />
          <Route path="/Rockps" component={Rockps} />
          <Route path="/Reminders" component={Reminders} />
          <Route path="/dogs" component={Dogs} />
          <Route path="/Shoppinglist" component={Shoppinglist} />
          <Route path="/StopWatch" component={StopWatch} />
          <Route path="/Books" component={Books} />
          <Route path="/People" component={People} />
          <Route path="/" exact component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
