export const Contacts = ({ items, findItems, deleteContactProps }) => {
  // if (findItems.length > 0) {
  console.log()
    return findItems.map(({ name, number, id, }) => (
      <li key={id}>
        {name}: {number}
        <button onClick={deleteContactProps} id={id}>Видалити</button>
      </li>
    ));
  // }
  // return items.map(({ name, number, id }) => (
  //   //  if(name === name){}
  //   <li key={id}>
  //     <p>
  //       {name}: {number}
  //     </p>

  //     {/* <button>Видалити</button> */}
  //   </li>
  // ));
};
