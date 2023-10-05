import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from '../../redux/contacts/contacts';
import { getContacts } from 'redux/contacts/selector';
import { getFilter } from 'redux/filter/selector';

import s from './ContactList.module.css';
import Filter from '../Filter/Filter';

const ContactList = () => {
  const filtersContacts = (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const contactsList = filtersContacts(contacts, filter);

  const deleteItem = id => {
    dispatch(deleteContacts(id));
  };

  return (
    <div className={s.contacts}>
        <h2>Contacts</h2>
        <Filter />
      <ul>
        {contactsList.map(({ name, number, id }) => (
          <li key={id}>
            <p>
              <span>{name} : </span>
              {number}
            </p>
            <button type="button" onClick={() => deleteItem(id)}>
              ⛌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
