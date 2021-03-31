import React, { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactsList from "./ContactsList/ContactsList";
import shortid from "shortid";

export default class Phonebook extends Component {
  state = {
    contacts: [
      // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      // { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "",
    number: "",
    filter: "",
  };

  componentDidMount() {
    const contacts = localStorage.getItem("phonebook");
    if (contacts) {
      console.log(JSON.parse(contacts));
      this.setState((prevState) => {
        return {
          contacts: [...prevState.contacts, ...JSON.parse(contacts)],
        };
      });
    }
  }

  onHandleSubmit = (e) => {
    e.preventDefault();
    const { contacts, name } = this.state;
    const double_name = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );

    double_name.length === 0
      ? this.updateContacts()
      : alert(name + " is already  in contact");
  };

  updateContacts() {
    this.setState((prevState) => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: shortid.generate(),
            name: prevState.name,
            number: prevState.number,
          },
        ],
      };
    });

    this.updateLocalStorge();

    //
  }

  updateLocalStorge() {
    this.setState((prevState) => {
      localStorage.setItem("phonebook", JSON.stringify(prevState.contacts));
    });
  }

  onHandleChange = ({ target }) => {
    const { name, value } = target;
    this.setState(() => {
      return {
        [name]: value,
      };
    });
  };

  getVisibleItem = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  onHandleDelete = (e) => {
    const { id } = e.target.dataset;
    const new_contact = this.state.contacts.filter((contact) => {
      return contact.id !== id;
    });
    this.setState(() => {
      return {
        contacts: new_contact,
      };
    });
    this.updateLocalStorge();
  };

  render() {
    const visibleContacts = this.getVisibleItem();
    return (
      <>
        <ContactForm
          onSubmit={this.onHandleSubmit}
          onChange={this.onHandleChange}
        />
        <h2>Contacts</h2>
        {this.state.contacts.length !== 0 && (
          <Filter onChange={this.onHandleChange} />
        )}
        <ContactsList
          visibleContacts={visibleContacts}
          onHandleDelete={this.onHandleDelete}
        />
      </>
    );
  }
}
