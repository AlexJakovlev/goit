import React from "react";
import { Route, Switch } from "react-router-dom";

import routers from "./routes";

import Home from "./conponents/Home/Home";
import About from "./conponents/About/About";
import MoviesPage from "./conponents/Contact/Contact";
import MovieDetailsPage from "./conponents/Movies/Movies";

import "./styles.css";
import NavBar from "./conponents/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path={routers.Home} exact component={Home} />
        <Route path="/movies" exact component={MoviesPage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        {/* <Route path={routers.Contact} component={Contact} />/movies/:movieId/cast
        <Route path={routers.About} component={About} /> */}
      </Switch>
    </>
  );
}
export default App;
