import React from 'react';
import { Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import {
  ContainerForm,
  Input,
  Label,
  Wrapper,
  ErrorMsg,
  Btn,
} from './ContactForm.styled';
import { IoMdPersonAdd } from 'react-icons/io';
import { BsFillTelephoneFill, BsPersonFill } from 'react-icons/bs';
import { contactsSchema } from 'schemas/contactsSchema';
import 'react-toastify/dist/ReactToastify.min.css';

const initialValues = {
  id: '',
  name: '',
  number: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: 'id-' + nanoid(),
      name: values.name,
      number: values.number,
    };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      return toast.error(`${newContact.name} is already in contacts`);
    }

    if (contacts.find(contact => contact.number === newContact.number)) {
      return toast.error(
        `The number ${newContact.number} is already in contacts`
      );
    }

    dispatch(addContact(newContact));

    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={contactsSchema}
      >
        {({ errors, touched }) => (
          <ContainerForm autoComplete="off">
            <Wrapper>
              <Label htmlFor="name">
                <BsPersonFill size="20" />
                Name:
              </Label>
              <Input
                autoComplete="off"
                name="name"
                type="text"
                id="name"
                data-error={errors.name && touched.name ? true : false}
              />
              <ErrorMsg name="name" component="div" />
            </Wrapper>

            <Wrapper>
              <Label htmlFor="number">
                <BsFillTelephoneFill size="20" />
                Number:
              </Label>
              <Input
                autoComplete="off"
                name="number"
                type="text"
                id="number"
                data-error={errors.name && touched.name ? true : false}
              />
              <ErrorMsg name="number" component="div" />
            </Wrapper>

            <Btn type="submit">
              <IoMdPersonAdd size="24" />
              Add contact
            </Btn>
          </ContainerForm>
        )}
      </Formik>
    </>
  );
};
