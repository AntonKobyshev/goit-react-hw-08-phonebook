import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { useState } from 'react';
import { Formik } from 'formik';
import { loginSchema } from 'schemas/loginSchema';
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
} from './LoginForm.styled';
import { AuthItem } from '../AuthNav/AuthNav.styled';

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [passwordShown, setPasswordShown] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    );

    resetForm();
  };

  const togglePassword = () => setPasswordShown(!passwordShown);

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={loginSchema}>
      {({ errors, touched }) => (
        <FormContainer>
          <Title>Please log in to continue</Title>
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
                {passwordShown ? <IconHidden /> : <IconShown />}
              </ShowPassBtn>
            </PassWrapper>
            <ErrorMsg name="password" component="span" />
          </InputWrapper>

          <Btn type="submit">Log in</Btn>
          Haven't account yet? Please <AuthItem to={'/register'}>Register</AuthItem>
        </FormContainer>
      )}
    </Formik>
  );
};