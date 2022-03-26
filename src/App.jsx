import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./routes/About";
import Contacts from "./routes/Contact";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/movies-catalog/movie/:id'>
          <Detail />
        </Route>
        <Route path="/movies-catalog/about">
          <About />
        </Route>
        <Route path="/movies-catalog/contacts">
          <Contacts />
        </Route>
        <Route path="/movies-catalog/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
