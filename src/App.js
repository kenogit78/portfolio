import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Homepage from "./component/Homepage/Homepage";
import Navbar from './component/Navbar/Navbar';
import Sidebar from "./component/Navbar/Sidebar";
import Work from "./component/Work/Work";

function App() {
 
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle}  />
      <Navbar toggle={toggle}  />

      <Switch>
        <Route exact path="/" component={Homepage} />

        <Route exact path="/work" component={Work} />
        




      </Switch>

      


      </Router>


    
  );
}

export default App;
