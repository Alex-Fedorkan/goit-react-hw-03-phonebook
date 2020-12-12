import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import ContactsContext from './context/ContactsContext';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    deleteContact: contactId => {
      this.setState(prevState => ({
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId,
        ),
      }));
    },
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addNewContact = ({ name, number }, { setSubmitting, resetForm }) => {
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`${name} is already in contacts.`);
      resetForm({ name, number });
      setSubmitting(false);
      return;
    }

    this.setState(prevState => {
      const contacts = [...prevState.contacts, { id: uuidv4(), name, number }];

      return { ...prevState, contacts };
    });

    resetForm({ name, number });
    setSubmitting(false);
  };

  handleFindInputChange = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    return (
      <ContactsContext.Provider value={this.state}>
        <div className="App">
          <h1>Phonebook</h1>
          <ContactForm handleFormSubmit={this.addNewContact} />
          <h2>Contacts</h2>
          <Filter
            value={this.filter}
            handleInputChange={this.handleFindInputChange}
          />
          <ContactList contacts={this.getVisibleContacts()} />
        </div>
      </ContactsContext.Provider>
    );
  }
}

export default App;
