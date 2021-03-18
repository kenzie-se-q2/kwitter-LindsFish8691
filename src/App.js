import { Switch, Route } from "react-router-dom";

import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Registration from "./components/registration/Registration.js";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/registration" component={Registration} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
