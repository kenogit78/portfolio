import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
// import Footer from "./component/Footer/Footer";
import Homepage from "./component/Homepage/Homepage";
import Navbar from './component/Navbar/Navbar';
import Sidebar from "./component/Navbar/Sidebar";
import Work from "./component/Work/Work";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Resume from "./component/Resume/Resume";

function App() {
 
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  Aos.init();
  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle}  />
      <Navbar toggle={toggle}  />

      <Switch>
        <Route exact path="/" component={Homepage} />

        <Route exact path="/work" component={Work} />

        <Route exact path="/about" component={About} />

        <Route exact path="/contact" component={Contact} />

        <Route exact path="/resume" component={Resume} />
       
      </Switch>

      
     

      </Router>


    
  );
}

export default App;
