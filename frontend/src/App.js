import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router,  Switch, Route, Link } from "react-router-dom";
import "./App.css";
import AddColumn from "./components/add-column.component";
import Column from "./components/column.component";
import ColumnsList from "./components/column-list.component";

class App extends Component {
  render() {
    return (
        <Router>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/columns"} className="navbar-brand">
            Learning-Diary
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/columns"} className="nav-link">
                Columns
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/columns"]} component={ColumnsList} />
            <Route exact path="/add" component={AddColumn} />
            <Route path="/columns/:id" component={Column} />
          </Switch>
        </div>
        </Router>
    );
  }
}

export default App;