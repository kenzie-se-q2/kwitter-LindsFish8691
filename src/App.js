import { Switch, Route } from "react-router-dom";

import Home from "./views/Home";
import MessageList from "./views/MessageList";
import NotFound from "./views/NotFound";
import Registration from "./components/registration/Registration.js";
import Profile from "./views/Profile";
import UserList from "./components/UserList.js";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/messages" component={MessageList} />
        <Route path="/users" component={UserList} />
        <Route exact path="/registration" component={Registration} />
        <Route path="/profile/" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
