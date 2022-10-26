// import { Component } from 'react';

// export const Contacts = ({items}) => {
// export const ContactForm = ({ onSubmitProps, onChangeProps }) => {
//   //   render() {
//   return (
//     <form onSubmit={onSubmitProps}>
//       <label>
//         Name
//         <input
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           // value={this.state.name}
//           onChange={onChangeProps}
//         />
//       </label>
//       <label>
//         Number
//         <input
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           onChange={onChangeProps}
//         />
//       </label>

//       <button type="submit">Add contacts</button>
//     </form>
//   );
//   //   }
// };
import { nanoid } from 'nanoid';
import { Component } from 'react';
export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleOnInputChange = e => {
    const nameInput = e.currentTarget.name;
    this.setState({ [nameInput]: e.target.value });    
  };
  
  handleOnSubmit = e => {
    e.preventDefault();
    
    let presenceContact = false;

    this.props.items.map(({ name }) => {
      if (name === this.state.name) {
        e.currentTarget.name.value = '';
        e.currentTarget.number.value = '';
        presenceContact = true;
        return alert(`${name} is already in contacts`);
      }      
    });
    
    if (!presenceContact) {
      const nameInput = e.currentTarget.name;

      this.setState({ [nameInput]: e.target.value });

      this.props.addToContactsProps(
        this.state.name,
        this.state.number,
        nanoid()
      );

      e.currentTarget.name.value = '';
      e.currentTarget.number.value = '';
    }
  };

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
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
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleOnInputChange}
          />
        </label>

        <button type="submit">Add contacts</button>
      </form>
    );
  }
}
