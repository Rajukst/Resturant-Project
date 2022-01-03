import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider";
import About from "./WebPages/About/About";
import Dashboard from "./WebPages/Dashboard/Dashboard";

import Footer from "./WebPages/Footer/Footer";
import Header from "./WebPages/Header/Header-Main/Header";
import DynamicHome from "./WebPages/Home/DynamicHome/DynamicHome";
import MainHome from "./WebPages/Home/MainHome/MainHome";
import Login from "./WebPages/Login/Login";
import PrivateRoute from "./WebPages/Private-Route/PrivateRoute";
import Register from "./WebPages/Register/Register";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <MainHome></MainHome>
            </Route>
            <Route path="/home">
              <MainHome></MainHome>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/order-page/:serviceId">
              <DynamicHome></DynamicHome>
            </PrivateRoute>
          </Switch>
          {/* <Footer /> */}
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
