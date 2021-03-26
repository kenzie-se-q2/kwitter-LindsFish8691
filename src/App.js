import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./views/Home";
import MessageList from "./views/MessageList";
import NotFound from "./views/NotFound";
import Registration from "./components/registration/Registration.js";
import Profile from "./views/Profile";
import UserList from "./views/UserList";
import User from "./components/UserCard/User.js";
import Message from "./components/MessageCard/Message.js";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/kwitter-LindsFish8691" component={Home} />
        <Route exact path="/messages" component={MessageList} />
        <Route exact path="/messages/:id" render={(props) => <Message {...props} />} />
        <Route exact path="/users" component={UserList} />
        <Route exact path="/users/:username" render={(props) => <User {...props} />} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/profile/:username" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
