import { register } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Formik } from 'formik';
import { registerSchema } from 'schemas/registerSchema';
import {
  FormContainer,
  Title,
  InputWrapper,
  Label,
  Input,
  Btn,
  ErrorMsg,
  IconHidden,
  IconShown,
  PassWrapper,
  ShowPassBtn,
} from './RegisterForm.styled';
import { AuthItem } from '../AuthNav/AuthNav.styled';

const initialValues = {
  username: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [passwordShown, setPasswordShown] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      register({
        name: values.username,
        email: values.email,
        password: values.password,
      })
    );

    // resetForm();
  };

  const togglePassword = () => setPasswordShown(!passwordShown);

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={registerSchema}>
      {({ errors, touched }) => (
        <FormContainer>
          <Title>Please register to continue</Title>
          <InputWrapper>
            <Label htmlFor="username">User name:</Label>
            <Input
              type="text"
              name="username"
              id="username"
              autoComplete="off"
              placeholder={' '}
              data-error={errors.username && touched.username ? true : false}
            />
            <ErrorMsg name="username" component="div" />
          </InputWrapper>

          <InputWrapper>
            <Label htmlFor="email">Email:</Label>
            <Input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              placeholder={' '}
              data-error={errors.email && touched.email ? true : false}
            />
            <ErrorMsg name="email" component="span" />
          </InputWrapper>

          <InputWrapper>
            <Label htmlFor="password">Password:</Label>
            <PassWrapper>
              <Input
                type={passwordShown ? 'text' : 'password'}
                name="password"
                id="password"
                autoComplete="off"
                placeholder={' '}
                data-error={errors.password && touched.password ? true : false}
              />

              <ShowPassBtn type="button" onClick={togglePassword} data-shown={passwordShown}>
                {passwordShown ? <IconShown /> : <IconHidden />}
              </ShowPassBtn>
            </PassWrapper>
            <ErrorMsg name="password" component="span" />
          </InputWrapper>
          <Btn type="submit">Register</Btn>
           Do you already have an account? Please <AuthItem to={'/login'}>Log in</AuthItem>
        </FormContainer>
      )}
    </Formik>
  );
};