import { Form, Field, ErrorMessage } from 'formik';
import styled from '@emotion/styled';

export const ContainerForm = styled(Form)`
  margin: 0 auto;
  padding: 20px;
  max-width: 50%;
`;

export const Wrapper = styled.div`
  margin-bottom: 30px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Label = styled.label`
  margin-bottom: 12px;
  font-weight: 500;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.7);
  display: flex;
  gap: 16px;
  width: 100%;
  justify-content: flex-start;
  align-items: baseline;
`;

export const Input = styled(Field)`
  padding: 4px 8px;
  width: 100%;
  font-size: 24px;
  caret-color: rgba(0, 0, 0, 0.7);
  color: var(--primary);
  background-color: rgba(255, 255, 255, 0.6);
  border: 2px solid rgba(255, 255, 255, 0.6);
  border-radius: 4px;
  outline: none;
  transition: all 250ms ease-in-out;
  &:not(:placeholder-shown)[data-error='false'] {
    border: 1px solid rgba(255, 255, 255, 1);
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
  margin-bottom: 48px;
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
