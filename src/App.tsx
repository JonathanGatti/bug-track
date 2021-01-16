import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import IssuePage from './pages/IssuePage';
import ProjectPage from './pages/ProjectPage';
import ProjectsList from './pages/ProjectsList';

function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <HomePage />} />
      <Route exact path="/projects" render={() => <ProjectsList />} />
      <Route exact path="/project/:id" render={() => <ProjectPage />} />
      <Route exact path="/issue/:id" render={() => <IssuePage />} />
    </Switch>
  );
}

export default App;
