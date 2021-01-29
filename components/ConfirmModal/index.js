import styled from 'styled-components';
import { DangerButton, PrimaryButton } from "../Button";
import Modal from '../Modal';

const YesButton = styled(PrimaryButton)`
  .h-10
`;

const NoButton = styled(DangerButton)`
  .h-10;
`;

const TierModal = ({ heading, close, onYes, isOpen }) => {
  return (
    <Modal isOpen={isOpen} heading={heading} close={close}>
      <YesButton onClick={onYes}>Yes</YesButton>
      <NoButton onClick={close}>No</NoButton>
    </Modal>
  );
};

export default TierModal;
