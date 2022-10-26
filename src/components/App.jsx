import { Component } from 'react';
// import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
// import { Contacts } from '../components/Contacts/Contacts';
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
    // name: '',
    // number: '',
  };

  handleOnInputChange = e => {
    const nameInput = e.currentTarget.name;
    this.setState({ [nameInput]: e.target.value });

    if (nameInput === 'filter') {
      this.filterContacts();
    }
  };

  addToContacts = (name, number, id) => {
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          { name: name, number: number, id: id },
        ],
      };
    });
  };
  deleteContact = (e) => {
    // console.log(e.currentTarget.id)
    const currentId = e.currentTarget.id;
    const newArrContacts = this.state.contacts.filter(({ id }) =>
      currentId !== id
    )
    // console.log(newArrContacts)    
    this.setState({ contacts: newArrContacts });
  }
  // checkPresenceContact = () => {
  //   this.setState({ alert: !this.state.alert });
  //   return this.state.alert;
  // }
  // handleOnSubmit = e => {
  //   e.preventDefault();

  //   const nameInput = e.currentTarget.name;
  //   this.setState({ [nameInput]: e.target.value });

  //   this.setState(prevState => {
  //     return {
  //       contacts: [
  //         ...prevState.contacts,
  //         { name: this.state.name, number: this.state.number, id: nanoid() },
  //       ],
  //     };
  //   });

  //   e.currentTarget.name.value = '';
  //   e.currentTarget.number.value = '';
  // };

  filterContacts = () => {
    const contactsArr = this.state.contacts;

    const contactsFindArr = contactsArr.filter(({ name }) => {
      const nameContact = name.toLowerCase();
      const nameFilter = this.state.filter.toLowerCase();
      // const nameFilter = e.target.value.toLowerCase();
      // return nameContact.includes(nameFilter);
      // if (nameContact.includes(nameFilter)) {
        
        // console.log('contactsFindArr', contactsFindArr);
        return nameContact.includes(nameFilter);
      // }
    });

    // console.log('contactsFindArr', contactsFindArr);
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
          <ContactForm
            onChangeProps={this.handleOnInputChange}
            addToContactsProps={this.addToContacts}
            items={this.state.contacts}
            checkPresenceContact={this.checkPresenceContact}
          />
        </Section>

        <Section title="Contacts">
          <ContactList
            onChangeProps={this.handleOnInputChange}
            items={this.state.contacts}
            filter={this.state.filter}
            findItems={this.filterContacts()}
            deleteContactProps={this.deleteContact}
          />
        </Section>
      </div>
    );
  }
}
