import styled from 'styled-components';

const ModalContainer = styled.div`
  .fixed;
  .top-50%;
  .left-50%;
  transform: translate(-50%, -50%);
  background: white;
  .rounded;
  width:40vw;
  border: 0.5px solid #c8c8c8;
  .shadow-2xl;
  @media(max-width:500px){
    width: 85vw;
  }
`;

const ModalHeading = styled.div`
  .p-5;
  .flex;
  .justify-between;
`;

const Heading = styled.div`
  .text-lg;
  .font-semibold;
`;

const CloseButton = styled.div`
  .text-gray-600;
  cursor: pointer;
`;

const Line = styled.div`
  background-color: #c8c8c8;
  height: 1px;
  width: 100%;
`;

const Modal = ({ isOpen, heading, children, close }) => {
  return isOpen? (
    <ModalContainer>
      <ModalHeading>
        <Heading>{heading}</Heading>
        <CloseButton onClick={() => close()}>&#10005;</CloseButton>
      </ModalHeading>
      <Line />
      {children}
    </ModalContainer>
  ): null;
};

export default Modal;
