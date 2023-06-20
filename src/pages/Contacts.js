import { Subtitle } from 'components/App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { useRefreshUser  } from '../hooks/useAuth';
import { Loader } from '../components/Loader/Loader';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const isRefreshing = useRefreshUser();
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Subtitle>Create contact</Subtitle>
      <ContactForm />

      <Subtitle>List of contacts</Subtitle>
      <Filter />
      {isRefreshing ? <Loader /> : <ContactList />}
    </>
  );
};