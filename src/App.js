import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./WebPages/Dashboard/DashboardMain/Dashboard";
import Header from "./WebPages/Header/Header-Main/Header";
import MainHome from "./WebPages/Home/MainHome/MainHome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/">
            <MainHome></MainHome>
          </Route>
          <Route path="/home">
            <MainHome></MainHome>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
