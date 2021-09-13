import React from "react";

import { Route, Switch } from "react-router-dom";
import AuthPage from "./views/authentication/pages/authPage";
import ChatPage from "./views/chat/pages/chatPage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/auth" component={AuthPage} />
        <Route exact path="/" component={ChatPage} />
      </Switch>
    </div>
  );
}

export default App;
