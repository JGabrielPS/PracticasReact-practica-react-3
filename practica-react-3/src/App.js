import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";

import Base from "./components/Base";
import Inicio from "./components/Inicio";

function App() {
  return (
    <Router>
      <Link to="/">Base</Link>
      <Link to="/inicio">Inicio</Link>
      <Switch>
        <Route path="/inicio/:id/:nombre/:edad">
          <Inicio />
        </Route>
        <Route path="/">
          <Base />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
