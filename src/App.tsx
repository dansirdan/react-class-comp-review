import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import Landing from "./views/Landing";
import "./App.css";
import Counter from "./views/Counter";
import PrivateRoute from "./components/PrivateRoutes/PrivateRoute";
import UserHome from "./views/UserHome";
import AdminRoute from "./components/PrivateRoutes/AdminRoute";
import AdminHome from "./views/AdminHome";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/counter' component={Counter} />
            <PrivateRoute path='/test' component={UserHome} redirectPath='/'/>
            <AdminRoute path='/admin' component={AdminHome} redirectPath='/'/>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
