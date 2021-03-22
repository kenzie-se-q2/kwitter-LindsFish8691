import { Switch, Route } from "react-router-dom";

import Home from "./views/Home";
import MessageList from "./views/MessageList";
import NotFound from "./views/NotFound";
import Registration from "./components/registration/Registration.js";
import Profile from "./views/Profile";
import PopUp from "./components/registration/Popup.js";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/messages" component={MessageList} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/profile" component={Profile} />
        <Route path="/profile/:username" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
