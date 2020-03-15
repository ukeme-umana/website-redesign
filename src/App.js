import React from 'react';
/* import logo from './logo.svg'; */
import './App.css';
/* import Learning from './views/trial'; */
// import Training from './views/trial';
import Team from './views/practice';
import Nav from './nav';
import About from './views/about-us';
import FarmerStories from './views/stories';
import HomePage from './views/home';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


/* 
const ukeme = {
  name:'uk',
  sibling:'Idara'
}

const gideon = {
  name: 'giddy',
  sibling: 'Emmanuel'
}
 */
function App() {
  return (
    <Router>
      <div>
        {/* <Learning></Learning> */}
        {/* <Training/> */}
        <Nav/>
        <Switch>
         <Route path="/" exact component={HomePage} /> 
        {/* <Route path="/test" component={Test} /> */}
        <Route path="/about" component={About} />
        <Route path="/team" component={Team} />
        <Route path="/stories" component={FarmerStories} />

        
        </Switch>
        
      </div>
   </Router>
  );
  }

  const Home = () => (
    <div>
      <h1>Home</h1>
    </div>
  )


/* function siblingRecognizer(person) {
return <h3>
The person with the name of {person.name} has a sibling of {person.sibling}
</h3>;
}
/* 
{ <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>  
  } */ 
 
export default App;
