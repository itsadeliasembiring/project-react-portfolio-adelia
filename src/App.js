// Import
import React from 'react';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Project from './component/Project';
import Skill from './component/Skill';
import Contact from './component/Contact';

// import Footer from './component/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path="/project-react-portfolio-adelia/" exact component={Home}/>
          <Route path="/project-react-portfolio-adelia/about" component={About}/>
          <Route path="/project-react-portfolio-adelia/project" component={Project}/>
          <Route path="/project-react-portfolio-adelia/skill" component={Skill}/>
          <Route path="/project-react-portfolio-adelia/contact" component={Contact}/>
        </Switch>

        {/* <Footer /> */}
      </div>
    </Router>
  );
}


export default App;