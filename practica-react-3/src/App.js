import {
  Route,
  Switch,
  NavLink,
  Link,
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/inicio">Estas en el inicio</Route>
        <Route path="/">Esta es la URL base</Route>
      </Switch>
    </Router>
  );
}

export default App;
