import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Home  from './components/Home'
import About from  './components/About';
import  Navigation from './components/Navigation';
import Contact from './components/Contact'; 
import Departments from './components/Departments';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <div className="container">
        <Switch >        
          <Route  path="/" component={Home} exact />
          <Route  path="/about" component={About} />
          <Route  path="/contact" component={Contact}/>
          <Route  path="/departments" component={Departments}/>
          <Route  component={Error} />
        </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
