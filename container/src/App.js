import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import MicroFrontend from './MicroFrontend';
import Home from './Home';

function App() {

    const Frontend1 = ({ history }) => (
      <MicroFrontend history={history} name="Frontend1" host="http://localhost:3001" />
    );

  return (
    <Router>
        <div className="App">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/frontend-1" component={Frontend1} />
            </Switch>
        </div>
    </Router>
  );
}

export default App;