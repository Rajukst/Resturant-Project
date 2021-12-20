import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./WebPages/Dashboard/DashboardMain/Dashboard";
import Footer from "./WebPages/Footer/Footer";
import Header from "./WebPages/Header/Header-Main/Header";
import DynamicHome from "./WebPages/Home/DynamicHome/DynamicHome";
import MainHome from "./WebPages/Home/MainHome/MainHome";
import Login from "./WebPages/Login/Login";
import Register from "./WebPages/Register/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <MainHome></MainHome>
          </Route>
          <Route path="/home">
            <MainHome></MainHome>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/order-page/:serviceId">
            <DynamicHome></DynamicHome>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
