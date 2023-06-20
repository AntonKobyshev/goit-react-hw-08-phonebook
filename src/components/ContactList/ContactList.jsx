import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';
import { getContactFilter } from 'redux/filter/selectors'; 
import { ContactItem } from 'components/ContactItem/ContactItem';
import { Contacts} from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getContactFilter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>

      <Contacts>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <ContactItem key={id} id={id} name={name} number={number} />
          );
        })}
      </Contacts>
    </>
  );
};
