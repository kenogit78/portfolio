import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from "react-router-dom";
import './App.css';
import Homepage from "./component/Homepage/Homepage";
import Navbar from './component/Navbar/Navbar';
import Work from "./component/Work/Work";

function App() {
  return (
    <Router>
      
      <Navbar />

      <Switch>
        <Route exact path="/" component={Homepage} />

        <Route exact path="/work" component={Work} />
        




      </Switch>

      


      </Router>


    
  );
}

export default App;
