import { Component } from "react";

export default class Searchbar extends Component {
  state = {
    valueInput: "",
  };

  onInputChange = (e) => {
    this.setState({
      valueInput: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.valueInput);
    this.setState({
      valueInput: "",
    });
  };

  render() {
    // const { onChange, onClick } = this.props;

    return (
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
    );
  }
}
