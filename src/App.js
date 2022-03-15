import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
// import Footer from "./component/Footer/Footer";
import Homepage from "./component/Homepage/Homepage";
import Navbar from './component/Navbar/Navbar';
import Sidebar from "./component/Navbar/Sidebar";
import Projects from "./component/Projects/Projects";
import About from "./component/About/About";
import Footer from "./component/Footer/Footer";
import ScrollToTop from "./component/Homepage/ScrollTop";

function App() {
 
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  Aos.init();
  return (
    <Router>

      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle}  />
      <Navbar toggle={toggle}  />

      <Switch>
        <Route exact path="/" component={Homepage} />

        <Route exact path="/project" component={Projects} />

        <Route exact path="/about" component={About} />
       
      </Switch>

      <Footer />
     

      </Router>


    
  );
}

export default App;
