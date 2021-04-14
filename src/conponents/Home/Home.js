import { Component } from "react";
import { NavLink } from "react-router-dom";
import routers from "../../routes";

import themoviedbAPI from "../../services/themoviedbAPI";

export default class Home extends Component {
  // const movies = Promise.all(themoviedbAPI.getTrending()).then((data) => data);
  state = {
    movies: [],
    error: null,
  };

  componentDidMount() {
    themoviedbAPI.getTrending().then((data) => this.setState({ movies: data }));
  }

  render() {
    const { match } = this.props;
    return (
      <>
        <h1>Tranding Day</h1>
        <ul>
          {this.state.movies.map((move) => (
            <li key={move.id}>
              <NavLink
                className="Navigation-link"
                activeClassName="Navigation-link-active"
                to={`${match.path}movies/${move.id}`}
              >
                {move.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
