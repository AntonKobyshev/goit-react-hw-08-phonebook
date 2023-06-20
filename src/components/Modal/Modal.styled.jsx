import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(1px);
`;

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 2;
  max-width: 360px;
  max-height: 90vh;
  transform: translate(-50%, -50%);
  padding: 24px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.5);
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 2px;
  backdrop-filter: blur(50px);
  overflow-y: auto;
`;

export const ModalTitle = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  align-items: center;
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 24px;
  color: rgba(255, 0, 0, 0.9);
`;

export const Message = styled.p`
  text-align: center;
  margin-bottom: 16px;
  font-size: 20px;
  color: rgba (0, 0, 0, 0.7);
`;

export const Name = styled.span`
  font-weight: 700;
  font-size: 18px;
  color: rgba(255, 0, 0, 0.9);
`;

export const Wrapper = styled.div`
  display: flex;
  align-item: center;
  justify-content: space-evenly;
  gap: 24px;
`;

export const Btn = styled.button`
  padding: 4px 20px;
  font-size: 18px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.9);
  border-radius: 4px;
  transition: all 250ms ease-in-out;
  cursor: pointer;
  :hover {
    color: rgba(0, 128, 0, 0.9);
    border: 1px solid rgba(0, 128, 0, 0.9);
    background-color: rgba(0, 128, 0, 0.3);
  }
`;

export const BtnDelete = styled.button`
  padding: 4px 20px;
  font-size: 18px;
  font-weight: 500;
  color: rgba(255, 0, 0, 0.9);
  border: 1px solid rgba(255, 0, 0, 0.9);
  border-radius: 4px;
  transition: all 250ms ease-in-out;
  cursor: pointer;
  :hover {
    color: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(255, 0, 0, 1);
    background-color: rgba(255, 0, 0, 0.9);
  }
`;
