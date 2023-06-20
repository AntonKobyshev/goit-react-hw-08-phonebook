import React from 'react';
import { useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';
import { deleteContact } from 'redux/contacts/operations';
import {
  Overlay,
  Container,
  Wrapper,
  ModalTitle,
  Message,
  Name,
  Btn,
  BtnDelete,
} from './Modal.styled';
import { RiDeleteBin5Line
 } from 'react-icons/ri';

const modalRoot = document.querySelector('#modal-root');

export const ConfirmModal = ({ id, name, closeConfirm }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return createPortal(
    <>
      <Container>

        <ModalTitle id="modal-title">Delete contact
        <RiDeleteBin5Line size="48" />
        </ModalTitle>
       
        <Message>
          Are you sure you want to delete a contact <Name>{name}</Name> ?
        </Message>

        <Wrapper>
          <Btn type="button" onClick={closeConfirm}>
            Cancel
          </Btn>
          <BtnDelete type="button" onClick={handleDeleteContact}>
            Delete
          </BtnDelete>
        </Wrapper>
      </Container>
      <Overlay onClick={closeConfirm}></Overlay>
    </>,
    modalRoot
  );
};
