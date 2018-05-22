import React, { Component } from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
import CreateNote from './components/CreateNote';
// import EditNote from "./components/EditNote";
// import Note from "./components/Note";
import SideBar from "./components/SideBar";
import Cards from "./components/Cards";


class App extends Component {
  render() {
    return <div className="container-fluid custom-container">
        <div class="row custom-row">
          <Route path="/" component={SideBar} />
          <Route exact path="/" component={Cards} />
          <Route exact path="/create" component={CreateNote} />
        </div>
      </div>;
  }
}

export default App;