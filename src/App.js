import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DataList from "./Components/DataList";
import NavBar from "./Components/NavBar";
import PublicList from "./Components/PublicList";
import HomePage from "./Components/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DataCard from "./Components/DataCard";
import PublicCard from "./Components/PublicCard";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <HomePage />
        <Switch>
          <Route exact path="/" Components={HomePage} />
          <Route exact path="/binance" Components={DataList} />
          <Route exact path="/public" Components={PublicList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
