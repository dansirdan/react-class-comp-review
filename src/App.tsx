import * as React from "react";
import './scss/app.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import Landing from "./views/Landing";
import PrivateRoute from "./components/PrivateRoutes/PrivateRoute";
import UserHome from "./views/UserHome";
import AdminRoute from "./components/PrivateRoutes/AdminRoute";
import AdminHome from "./views/AdminHome";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/' component={Landing} />
            <PrivateRoute path='/home' component={UserHome} redirectPath='/'/>
            <AdminRoute path='/admin' component={AdminHome} redirectPath='/'/>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
