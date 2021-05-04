import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactsList from "./ContactsList/ContactsList";
// import shortid from "shortid";

import { connect } from "react-redux";
// import phoneBookActions from "../../redux/phoneBookActions";
// import style from "./Phonebook.module.css";
import "./Phonebook.css";
class Phonebook extends Component {
  state = {};

  render() {
    // const visibleContacts = this.getVisibleItem();
    return (
      <>
        <CSSTransition
          in={true}
          appear={true}
          classNames="titlefadeIn"
          timeout={250}
        >
          <p className="title">Phonebook</p>
        </CSSTransition>
        <ContactForm />
        {this.props.visibleContacts.length !== 0 && <Filter />}
        <ContactsList />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state.contacts.filter, "  state.contacts.filter");
  return {
    visibleContacts: state.contacts.phonebook,
  };
};

const mapDispatchToprops = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToprops)(Phonebook);
