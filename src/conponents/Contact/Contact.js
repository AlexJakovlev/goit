import { NavLink } from "react-router-dom";
import { Component } from "react";
import themoviedbAPI from "../../services/themoviedbAPI";
export default class Contact extends Component {
  state = {
    valueInput: "",
    showItems: false,
    movies: [],
  };
  componentDidMount() {}
  onInputChange = (e) => {
    this.setState({
      valueInput: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const response = themoviedbAPI.searchMovies(this.state.valueInput);
    response.then((data) => this.setState({ movies: data, showItems: true }));
  };

  render() {
    const { match } = this.props;

    return (
      <>
        <div className="Searchbar">
          <form className="SearchForm">
            <button
              type="submit"
              className="SearchForm-button"
              onClick={this.handleSubmit}
            >
              <span className="SearchForm-button-label">Search</span>
            </button>

            <input
              value={this.state.valueInput}
              onChange={this.onInputChange}
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </div>
        {this.state.showItems && (
          <ul>
            {this.state.movies.map((move) => (
              <li key={move.id}>
                <NavLink
                  className="Navigation-link"
                  activeClassName="Navigation-link-active"
                  to={`${match.path}/${move.id}`}
                >
                  {move.title}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
