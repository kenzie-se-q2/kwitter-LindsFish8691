import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./views/Home";
import MessageList from "./views/MessageList";
import NotFound from "./views/NotFound";
import Registration from "./components/registration/Registration.js";
import Profile from "./views/Profile";
import UserList from "./views/UserList";
import User from "./components/UserCard/User.js";
import { deleteMessage } from "./fetchRequests";
import { postMessage } from "./fetchRequests";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/messages" component={MessageList} />
        <Route exact path="/users" component={UserList} />
        <Route exact path="/users/:username" render={(props) => <User {...props} />} />
        <Route exact path="/registration" component={Registration} />
        <Route path="/profile" component={Profile} />
        <Route path="/deleteMessage/:id" component={deleteMessage} />
        <Route path="/postMessage/:id" component={postMessage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
