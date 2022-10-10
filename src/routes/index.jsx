import { Switch, BrowserRouter, Route } from "react-router-dom";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="*">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
