import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcConferenceCall, FcContacts } from "react-icons/fc";

import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import './App.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {

    const contactList = localStorage.getItem('Contacts');
    const parsedContactList = JSON.parse(contactList);

    if (parsedContactList && Array.isArray(parsedContactList)) {
      this.setState({ contacts: parsedContactList });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('Contacts', JSON.stringify(this.state.contacts));
  }

  addContact = (name, number) => {
    const shortid = require('shortid');

    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    const searchSameContact = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (searchSameContact) {
      toast.error(`Oops.. ${name} is already in your contacts`,
        { icon: "⛔", theme: "colored" });
      return;
    } else {
      this.setState(prevState => (
        { contacts: [...prevState.contacts, contact] }
      ));

      toast.success(`Added`,
        { icon: "✔️", theme: "colored" });
    };
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  findContactByName = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }));

    toast.warn('Deleted',
      { icon: "✔️", theme: "colored" });
  };

  render() {
    const visibleContacts = this.findContactByName();

    return (
      <div className="App">

        <h1 className="title">Phonebook <FcContacts className="titleIcon" /></h1>

        <ContactForm onSubmit={this.addContact} />

        <h2 className="title">Contacts <FcConferenceCall className="titleIcon" /></h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact} />

        <ToastContainer position="top-center"
          autoClose={4000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

      </div>
    );
  }
}

export default App;
