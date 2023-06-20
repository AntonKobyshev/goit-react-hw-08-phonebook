import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 24px;
  color: rgba(0, 0, 0, 0.6);
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 24px;
  margin-bottom: 24px;
  max-width: 100%;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 22px;
  color: rgba(0, 0, 0, 0.7);
`;

export const Input = styled(Field)`
  padding: 4px 16px;
  width: 100%;
  font-size: 24px;
  color: rgba(0, 0, 0, 0.7);
  background-color: rgba(255, 255, 255, 0.6);
  border: 2px solid rgba(255, 255, 255, 0.6);
  caret-color: rgba(0, 0, 0, 0.7);
  border-radius: 4px;
  transition: all 300ms ease-in-out;
  outline: none;
  &:not(:placeholder-shown)[data-error='false'] {
    border: 2px solid rgba(255, 255, 255, 1);
    background-color: rgba(255, 255, 255, 0.6);
  }

  &[data-error='true'] {
    color: rgba(255, 0, 0, 0.5);
    border: 2px solid rgba(255, 0, 0, 0.5);
    background-color: rgba(255, 255, 255, 0.6);
  }

  &:hover,
  &:focus {
    border: 2px solid rgba(0, 128, 0, 0.9);
    background-color: rgba(255, 255, 255, 0.6);
  }
`;

export const Btn = styled.button`
  display: flex;
  gap: 15px;
  align-items: center;
  margin-top: 18px;
  margin-bottom: 18px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 25px;
  font-size: 24px;
  font-weight: 500;
  color: rgba(0, 128, 0, 0.9);
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid rgba(0, 128, 0, 0.9);
  box-shadow: var(--main-shadow);
  cursor: pointer;
  transition: all 250ms ease-in-out;
  :hover {
    color: rgba(255, 255, 255, 1);
    background-color: rgba(0, 128, 0, 0.9);
  }
`;

export const ErrorMsg = styled(ErrorMessage)`
  font-size: 14px;
  color: rgba(255, 0, 0, 1);
`;

export const PassWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const ShowPassBtn = styled.button`
  position: absolute;
  top: 6px;
  right: -30px;
  padding: 2px;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: none;
  transition: border 250ms ease-in-out;
  cursor: pointer;
  &:hover > svg {
    fill: rgba(0, 128, 0, 0.9);
  }
`;

export const IconHidden = styled(AiFillEyeInvisible)`
  width: 100%;
  height: 100%;
  fill: rgba(0, 0, 0, 0.5);
  transition: fill 250ms ease-in-out;
`;

export const IconShown = styled(AiFillEye)`
  width: 100%;
  height: 100%;
  fill: rgba(0, 0, 0, 0.5);
  transition: fill 250ms ease-in-out;
`;
