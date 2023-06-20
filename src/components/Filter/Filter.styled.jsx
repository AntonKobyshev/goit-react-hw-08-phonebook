import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin: 0 auto;
  margin-bottom: 30px;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Label = styled.label`
  display: flex;
  gap: 15px;
  align-items: center;
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 24px;
  color: var(--secondary);
`;

export const Input = styled.input`
  padding: 5px 10px;
  width: 100%;
  font-size: 20px;
  caret-color: rgba(0, 0, 0, 0.7);
  color: rgba(0, 0, 0, 0.7);
  background-color: rgba(255, 255, 255, 0.6);
  border: 2px solid rgba(255, 255, 255, 0.9);
  border-radius: 4px;
  outline: none;

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }

  &:hover,
  &:focus {
    border: 2px solid rgba(0, 128, 0, 0.9);
    background-color: rgba(255, 255, 255, 0.6);
  }
`;
