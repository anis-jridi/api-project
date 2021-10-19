import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import HomePage from "./Components/HomePage";
import DataList from "./Components/DataList";
import PublicList from "./Components/PublicList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Binance from "./Components/Binance";
import Public from "./Components/Public";
import Footer from "./Components/Footer";

function App() {
  const changes = useSelector((state) => state.allChanges.changes);
  const publics = useSelector((state) => state.allPublics.publics);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/finance" component={DataList} />
          <Route exact path="/public" component={PublicList} />
          <Route
            exact
            path="/finance/:id"
            render={(props) => <Binance {...props} binance={changes} />}
          />
          <Route
            exact
            path="/public/:id"
            render={(props) => <Public {...props} pub={publics} />}
          />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
