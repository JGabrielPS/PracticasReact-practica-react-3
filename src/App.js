import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";

// import Base from "./components/Base";
// import Inicio from "./components/Inicio";
import Usuarios from "./components/Usuarios";
import Usuario from "./components/Usuario";

function App() {
  return (
    <Router>
      <Link to="/">
        Usuarios
      </Link>
      <Switch>
        <Route exact path="/">
          <Usuarios />
        </Route>
        <Route path="/usuario/:id">
          <Usuario />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
