import { Contacts } from './Contacts';
export const ContactList = ({ deleteContactProps, onChangeProps, items, findItems }) => {
  return (
    <div>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          // value={this.state.name}
          onChange={onChangeProps}
        />
      </label>
      <ul>
        <Contacts items={items} findItems={findItems}
          deleteContactProps={ deleteContactProps } />
      </ul>
    </div>
  );
};
// import { Contacts } from './Contacts';
// import { Component } from 'react';

