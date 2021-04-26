import { Component } from "react";
import "./styles.css";

export default class Header extends Component {
  state = {};

  //componentDidMount = () => {};

  //shouldComponentUpdate(nextProps, nextState) => {};

  //componentDidUpdate = (prevProps, prevState, snapshot) => {};

  //componentWillUnmount = () => {};
  onHandleClick = (e) => {
    this.props.click(e.target.dataset.action);
  };

  render() {
    return (
      <header className="top-header">
        <section className="appBar">
          <span className="logo">&#129409;</span>
          <nav className="navBar">
            <ul>
              <li data-action="Feedback" onClick={this.onHandleClick}>
                Feedback
              </li>
              <li data-action="Phonebook" onClick={this.onHandleClick}>
                Phonebook
              </li>
            </ul>
          </nav>
        </section>
      </header>
    );
  }
}
