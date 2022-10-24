import { Component } from 'react';
import { nanoid } from 'nanoid';
import { PhoneBook } from './PhoneBook/PhoneBook';
import { Contacts } from '../components/Contacts/Contacts';
import { Section } from './Section/Section';
import { ContactSearch } from './Contacts/ContactSearch';

import { ContactList } from './Contacts/ContactList';

export class App extends Component {
  // constructor() {
  //   super();

  //   // this.state = {
  //   //   contacts: [],
  //   //   name: '',
  //   // };
  // }
  // state = {
  //   contacts: [],
  //   name: '',
  //   number: '',
  // };
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
    // console.log(e.currentTarget.name)
    if (nameInput === 'filter') {
      // console.log('тут фільтер')
      this.filterContacts();
    }
    // console.log(this.state)
  };

  handleOnSubmit = e => {
    e.preventDefault();
    // const inputValue = e.currentTarget.name.value;
    const nameInput = e.currentTarget.name;
    this.setState({ [nameInput]: e.target.value });
    // this.setState({ name: e.currentTarget.name.value });
    // this.setState({ number: e.currentTarget.number.value });

    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          { name: this.state.name, number: this.state.number, id: nanoid() },
        ],
      };
    });
    // this.setState({ name: '' });
    e.currentTarget.name.value = '';
    e.currentTarget.number.value = '';
  };

  filterContacts = () => {
    const contactsArr = this.state.contacts;
    // console.log(contactsArr);
    // console.log(this.state.filter);

    //     const values = [51, -3, 27, 21, -68, 42, -37];
    // const positiveValues = values.filter(value => value >= 0);
    // console.log(positiveValues); // [51, 27, 21, 42]

    const contactsFindArr = contactsArr.filter(({ name }) => {
      //console.log(productName.includes("дроїд"))
      return name.includes(this.state.filter);
    });

    console.log('contactsFindArr', contactsFindArr);
    return contactsFindArr;

    //  this.setState(prevState => {

    //   console.log(prevState.value);
    //   return { value: prevState.value + 1 };
    // });
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
          {/* <form onSubmit={this.handleOnSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                // value={this.state.name}
                onChange={this.handleOnInputChange}
              />
            </label>

            <button type="submit">Add contacts</button>
          </form> */}
        </Section>

        <Section title="Contacts">
          {/* <ContactSearch onChangeProps={this.handleOnInputChange}/> */}
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
