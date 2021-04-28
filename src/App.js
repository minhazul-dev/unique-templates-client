import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './components/Home/Home/Home';
import CheckOut from './components/CheckOut/CheckOut';
import { createContext } from 'react';
import { useState } from 'react';
import LogIn from './components/LogIn/Login/LogIn';
import Orders from './components/Orders/Orders';
import AddService from './components/AddService/AddService';
import AddReview from './components/Home/AddReview/AddReview';
import PrivateRoute from './components/LogIn/PrivateRoute/PrivateRoute'
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Manage from './components/Manage/Manage';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <PrivateRoute path="/dashboard/allOrders">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/checkout/:_id">
            <CheckOut />
          </PrivateRoute>
          <PrivateRoute path="/addServices">
            <AddService />
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders />
          </PrivateRoute>
          <PrivateRoute path="/addReview">
            <AddReview />
          </PrivateRoute>
          <PrivateRoute path="/manage">
            <Manage />
          </PrivateRoute>
          <PrivateRoute path='/makeadmin'>
            <MakeAdmin />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>


  );
}

export default App;
