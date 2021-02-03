import styled from 'styled-components';
import { DangerButton, PrimaryButton } from "../Button";
import Modal from '../Modal';

const Container = styled.div`
  .py-2;
  margin-left: 8px;
  & > button + button {
    margin-left: 8px;
  }
  button {
    width: 90px;
  }
`;

const ConfirmModal = ({ heading, close, onYes, isOpen }) => {
  return (
    <Modal isOpen={isOpen} heading={heading} close={close}>
      <Container>
        <PrimaryButton size="lg" onClick={() => {
          onYes()
          close()
        }}>Yes</PrimaryButton>
        <DangerButton size="lg" onClick={close}>No</DangerButton>
      </Container>
    </Modal>
  );
};

export default ConfirmModal;
