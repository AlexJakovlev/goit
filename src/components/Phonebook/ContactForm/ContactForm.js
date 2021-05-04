import React, { Component } from "react";
import { connect } from "react-redux";

import Alert from "../Alert/Alert";
import phoneBookActions from "../../../redux/phoneBookActions";

import styles from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };
  onHandleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.props.visibleContacts);
    const { name } = this.state;
    const double_name = this.props.visibleContacts.filter((contact) =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );

    double_name.length === 0
      ? this.props.add(this.updateContacts())
      : this.setState({ alert: true });
  };

  updateContacts() {
    this.setState({ alert: false, name: "", number: "" });
    return {
      name: this.state.name,
      number: this.state.number,
    };
  }

  onHandleChange = ({ target }) => {
    const { name, value } = target;
    this.setState(() => {
      return {
        [name]: value,
      };
    });
  };
  render() {
    return (
      <>
        {this.state.alert && <Alert />}
        <form className={styles.form} onSubmit={this.onHandleSubmit}>
          <label>
            Name
            <input
              onChange={this.onHandleChange}
              type="text"
              name="name"
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <label>
            Phone
            <input
              onChange={this.onHandleChange}
              type="tel"
              name="number"
              // pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
              title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
              required
            />
          </label>
          <button type="submit">Add Contact</button>
        </form>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state.contacts.filter, "  state.contacts.filter");
  return {
    visibleContacts: state.contacts.phonebook,
    alert: state.alert,
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    add: (e) => dispatch(phoneBookActions.add(e)),
  };
};
export default connect(mapStateToProps, mapDispatchToprops)(ContactForm);
