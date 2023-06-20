import * as Yup from 'yup';

export const contactsSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Name must be at least 2 characters long').max(48).required('Required'),
  number: Yup.number().required('Required'),
});