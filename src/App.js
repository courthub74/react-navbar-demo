import React from 'react';
import './App.css';
// import Navbar from './components/Navbar/Navbar';
import { House } from './pages/home';
import { Practices } from './pages/practices';
import { Projects } from './pages/projects';
import { Deliverables } from './pages/deliverables';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Django } from './pages/django';
import { Python, Functions } from './pages/python';
import { Javascript, Jsbasic } from './pages/javascript';
import { html } from './pages/html';
import { CSS } from './pages/css';
import { Flask } from './pages/flask';
import { Reactpg } from './pages/react';
import { Git } from './pages/git';
import { Github } from './pages/github';
import { API } from './pages/api';



function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Sidebar />
        <Switch>
          <Route path='/pages/home' exact component={House} />
          <Route path='/pages/practices' exact component={Practices} />
          <Route path='/pages/projects' exact component={Projects} />
          <Route path='/pages/deliverables' exact component={Deliverables} />
          <Route path='/python' exact component={Python}/>
          <Route path='/python/functions' exact component={Functions} />
          <Route path='/django' exact component={Django} />
          <Route path='/javascript' exact component={Javascript} />
          <Route path='/javascript/basics' exact component={Jsbasic} />
          <Route path='/html' exact component={html} />
          <Route path='/css' exact component={CSS} />
          <Route path='/flask' exact component={Flask} />
          <Route path='/react' exact component={Reactpg} />
          <Route path='/git' exact component={Git} />
          <Route path='/github' exact component={Github} />
          <Route path='/api' exact component={API} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
