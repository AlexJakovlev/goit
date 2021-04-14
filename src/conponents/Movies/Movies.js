import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { NavLink } from "react-router-dom";

import themoviedbAPI from "../../services/themoviedbAPI";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";
import routers from "../../routes";

// класс необходим !!!
export default class MovieDetailsPage extends Component {
  state = {
    movies: {},
    showMovies: false,
  };
  componentDidMount() {
    themoviedbAPI
      .getMovieDetails(this.props.match.params.movieId)
      .then((data) => this.setState({ movies: data }))
      .finally(() => this.setState({ showMovies: true }));
  }
  componentWillUnmount() {
    this.setState({ showMovies: false });
  }
  onHandlBack = () => {
    this.props.history.goBack();
  };
  render() {
    const genres = this.state.movies.genres;
    const show = this.state.showMovies;
    const imgsrc = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${this.state.movies.poster_path}`;

    return (
      <>
        {show && (
          <>
            <button onClick={this.onHandlBack}>Go Back</button>
            <h3>MovieDetailsPage {this.props.match.params.movieId}</h3>

            <article className="MovieDetail ">
              <img className="imgdescr" src={imgsrc} alt="img descr"></img>
              <div className="description">
                <h1>
                  {this.state.movies.title} ({this.state.movies.release_date})
                </h1>
                <p>User Score: {this.state.movies.vote_count}%</p>
                <h2>Overview</h2>
                <p>{this.state.movies.overview}</p>
                <h3>Genre:</h3>
                <p>
                  {genres.map((genre) => (
                    <span key={genre.id}>{genre.name}</span>
                  ))}
                </p>
              </div>
            </article>

            <hr className="header_hr" />
            <h4>Additional information</h4>
            <ul className="navBar">
              <li>
                <NavLink
                  exact
                  className="Navigation-link"
                  activeClassName="Navigation-link-active"
                  to={`/movies/${this.state.movies.id}/cast`}
                >
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="Navigation-link"
                  activeClassName="Navigation-link-active"
                  to={`/movies/${this.state.movies.id}/reviews`}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
            <hr className="header_hr" />
            <Route path={routers.Cast} component={Cast}></Route>
            <Route path={routers.Reviews} component={Reviews}></Route>
          </>
        )}
      </>
    );
  }
}
