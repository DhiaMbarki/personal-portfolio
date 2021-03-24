import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/about';
import workExp from './pages/workExp';
import Contact from './pages/contact';
import Slide from './pages/slide';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/workExp' component={workExp} />
        <Route path='/contact-us' component={Contact} />
        <div>
       
        <About/>
        <Slide/>
        <Home/>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
