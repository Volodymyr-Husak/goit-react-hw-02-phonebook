// import { Component } from 'react';

// export const Contacts = ({items}) => {
export const PhoneBook = ({ onSubmitProps, onChangeProps }) => {
  //   render() {
  return (
    <form onSubmit={onSubmitProps}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          // value={this.state.name}
          onChange={onChangeProps}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onChangeProps}
        />
      </label>

      <button type="submit">Add contacts</button>
    </form>
  );
  //   }
};
