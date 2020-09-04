import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MicroFrontend from './common/MicroFrontend';
import Home from './Home';
import MainTab from './page/MainTab';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    const Frontend1 = ({ history }) => (
      <MicroFrontend history={history} name="Frontend1" host="http://localhost:3001" />
    );

  return (
    <Router>
        <div className="App">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/tab" component={MainTab} />
                <Route exact path="/frontend-1" component={Frontend1} />
            </Switch>
        </div>
    </Router>
  );
}

export default App;