import { Component } from "react";

import Header from "./Header/Header";
import Layout from "./Layout/Layout";
import Counter from "./Counter/Counter";
import Phonebook from "./Phonebook/Phonebook";

export default class App extends Component {
  state = {
    show: false,
  };
  onclick = (e) => {
    console.log(e);
    this.setState({ show: e });
  };
  render() {
    return (
      <>
        <Header click={this.onclick} />
        {this.state.show === "Feedback" && (
          <Layout>
            <Counter />
          </Layout>
        )}
        {this.state.show === "Phonebook" && (
          <Layout>
            <Phonebook />
          </Layout>
        )}
      </>
    );
  }
}
