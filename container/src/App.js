import React from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {setToggle} from './actions/toggle'
import MicroFrontend from './common/MicroFrontend';
import Home from './Home';
import MainTab from './page/MainTab';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const dispatch = useDispatch()

    const fetchFeatureToggle = () => {
        fetch("/api/toggle")
            .then(res => res.json())
            .then(res => {
                dispatch(setToggle(res))
            }
        )
    }
    fetchFeatureToggle()

    const Frontend1 = ({ history }) => (
      <MicroFrontend history={history} name="Frontend1" host="http://localhost:3001" />
    );

    const Frontend2 = ({ history }) => (
      <MicroFrontend history={history} name="Frontend2" host="http://localhost:3002" />
    );

  return (
    <Router>
        <div className="App">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/tab" component={MainTab} />
                <Route exact path="/frontend-1" component={Frontend1} />
                <Route exact path="/frontend-2" component={Frontend2} />
            </Switch>
        </div>
    </Router>
  );
}

export default App;