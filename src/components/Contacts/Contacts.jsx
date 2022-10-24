export const Contacts = ({ items, findItem }) => {
  if (findItem.length > 0) {
    return findItem.map(({ name, number, id }) => (
      <li key={id}>
        {name}: {number}
      </li>
    ));

  }
     return items.map(({ name, number, id }) => (
      <li key={id}>
        {name}: {number}
      </li>
    ));
};
