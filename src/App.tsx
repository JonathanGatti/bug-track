import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AppContainer } from './styles/styledComponents';
import HomePage from './pages/HomePage';
import IssuePage from './pages/IssuePage';
import ProjectPage from './pages/ProjectPage';
import ProjectsList from './pages/ProjectsList';
import Navbar from './components/Navbar';
import CreateIssue from './pages/CreateIssue';
import UserPage from './pages/UserPage';

function App() {
  return (
    <AppContainer>
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route exact path="/projects" render={() => <ProjectsList />} />
        <Route exact path="/project/:id" render={() => <ProjectPage />} />
        <Route
          exact
          path="/issue/:id"
          render={(routeProps) => <IssuePage {...routeProps} />}
        />
        <Route
          exact
          path="/user/:id"
          render={(routeProps) => <UserPage {...routeProps} />}
        />
        <Route exact path="/create/issue" render={() => <CreateIssue />} />
      </Switch>
    </AppContainer>
  );
}

export default App;
