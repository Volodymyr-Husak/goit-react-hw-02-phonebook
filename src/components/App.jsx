import { Component } from 'react';
import { nanoid } from 'nanoid';
import { PhoneBook } from './PhoneBook/PhoneBook';
import { Contacts } from '../components/Contacts/Contacts';
import { Section } from './Section/Section';

import { ContactList } from './Contacts/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleOnInputChange = e => {
    const nameInput = e.currentTarget.name;
    this.setState({ [nameInput]: e.target.value });

    if (nameInput === 'filter') {
      this.filterContacts();
    }
  };

  handleOnSubmit = e => {
    e.preventDefault();

    const nameInput = e.currentTarget.name;
    this.setState({ [nameInput]: e.target.value });

    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          { name: this.state.name, number: this.state.number, id: nanoid() },
        ],
      };
    });

    e.currentTarget.name.value = '';
    e.currentTarget.number.value = '';
  };

  filterContacts = () => {
    const contactsArr = this.state.contacts;

    const contactsFindArr = contactsArr.filter(({ name }) => {
      const nameContact = name.toLowerCase();
      const nameFilter = this.state.filter.toLowerCase();

      return nameContact.includes(nameFilter);
    });

    console.log('contactsFindArr', contactsFindArr);
    return contactsFindArr;

  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          display: 'block',
        }}
      >
        <Section title="Phonebook">
          <PhoneBook
            onSubmitProps={this.handleOnSubmit}
            onChangeProps={this.handleOnInputChange}
          ></PhoneBook>
         
        </Section>

        <Section title="Contacts">
          <ContactList onChangeProps={this.handleOnInputChange}>
            <Contacts
              items={this.state.contacts}
              findItem={this.filterContacts()}
            ></Contacts>
          </ContactList>
        </Section>
      </div>
    );
  }
}
