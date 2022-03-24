import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./routes/About";
import Contacts from "./routes/Contact";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/movie/:id'>
          <Detail />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
