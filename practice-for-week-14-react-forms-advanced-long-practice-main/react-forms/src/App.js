import { Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { Survey } from "./components/Survey";
import { Navigation } from "./components/Navigation";
import { Head } from "./components/Head";
import Results from "./components/Results";

function App() {
  return (
      <>
        <Head />
        <Navigation />
        <Switch>
          <Route path='/survey'>
            <Survey />
          </Route>
          <Route path='/results'>
            <Results />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </>
    );
}

export default App;
