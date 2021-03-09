import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import TeamDetails from "./components/TeamDetails/TeamDetails";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/team/:idTeam" >
            <TeamDetails></TeamDetails>
          </Route>
          <Route path="/" >
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
