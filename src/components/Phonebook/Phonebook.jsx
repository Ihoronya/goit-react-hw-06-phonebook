import { useSelector } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import { getContacts } from 'redux/contacts/selector';
import NoContactsMessage from '../NoContactsMessage/NoContactsMessage';

import Filter from '../Filter/Filter';

const Phonebook = () => {
  
  const contacts = useSelector(getContacts);

  return (
    <>
      <ContactForm />

      {contacts.length > 0 ? (
        <ContactList>
        <Filter />
        </ContactList>
      ) : (
        <NoContactsMessage />
      )}
      
    </>
  );
}

export default Phonebook;