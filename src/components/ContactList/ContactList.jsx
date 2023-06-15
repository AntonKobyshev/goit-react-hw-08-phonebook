import { useDispatch, useSelector } from 'react-redux';
import { getContactFilter, getContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import {
  Btn,
  Contacts,
  ContactsItem,
  Name,
  Number,
} from './ContactList.styled';
import { IoPersonRemove } from 'react-icons/io5';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getContactFilter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Contacts>
        {filteredContacts.map(({ id, name, phone }) => {
          return (
            <ContactsItem key={id}>
              <Name>{name}</Name>
              <Number>{phone}</Number>
              <Btn type="button" onClick={() => dispatch(deleteContact(id))}>
                <IoPersonRemove size="16" />
                Delete
              </Btn>
            </ContactsItem>
          );
        })}
      </Contacts>
    </>
  );
};
