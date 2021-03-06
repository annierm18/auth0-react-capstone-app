import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import PrivateRoute from "./components/PrivateRoute";
import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import GetStarted from "./views/getStarted";
import Profile from "./views/Profile";
import Account from "./views/Account";
import RegisterPlants from "./views/RegisterPlants";
import { useAuth0 } from "./react-auth0-spa";

// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <Loading />;
  }

  return (
    <Router >
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        <Container className="flex-grow-1 mt-5">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/get-started" exact component={GetStarted} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/account" component={Account} />
            <PrivateRoute path="/register-plants" component={RegisterPlants} />
          </Switch>
        </Container>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
