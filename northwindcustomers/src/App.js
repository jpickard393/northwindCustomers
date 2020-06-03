import React from 'react';
import CustomersList from './Components/CustomersList/CustomersList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menubar from './Components/Menubar/Menubar';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Menubar></Menubar>
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/customerslist" component={CustomersList} />
      </Switch>
    </Router>

  );
}

export default App;
