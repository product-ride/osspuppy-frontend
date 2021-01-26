import styled from 'styled-components';

const ModalContainer = styled.div`
  .fixed;
  .top-50%;
  .left-50%;
  transform: translate(-50%, -50%);
  background: white;
  .rounded;
  width:40vw;
  height:400px;
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

const FormContainer = styled.div`
  .p-5;
  .w-full;
`;

const Label = styled.label`
  .block;
  .uppercase;
  .tracking-wide;
  .text-gray-700;
  .text-xs;
  .font-bold;
  .mb-3;
`;

const FieldContainer = styled.div`
  .flex;
  .flex-wrap;
  .justify-between;
  .-mx-3;
  .mb-6;
`;

const HalfInputContainer = styled.div`
  .w-full; 
  .md:w-1/2;
  .px-3;
  .mb-6;
  .md:mb-0;
`;

const FullInputContainer = styled.div`
  .w-full; 
  .px-3;
  .mb-6;
  .md:mb-0;
`;

const InputField = styled.input`
  .appearance-none;
  .block;
  .w-full;
  .bg-gray-200;
  .rounded;
  .py-3;
  .px-4;
  .leading-tight;
  .focus:outline-none;
  .focus:bg-white;
  .focus:border-gray-500;
`;

const TextAreaField = styled.textarea`
  .appearance-none;
  .block;
  .w-full;
  .bg-gray-200;
  .rounded;
  .py-3;
  .px-4;
  .leading-tight;
  .focus:outline-none;
  .focus:bg-white;
  .focus:border-gray-500;
`;

const AddTierModal = ({ closeModal }) => {
  return (
    <ModalContainer>
      <ModalHeading>
        <Heading>Add Tier</Heading>
        <CloseButton onClick={() => closeModal()}>&#10005;</CloseButton>
      </ModalHeading>
      <Line />
      <FormContainer>
        <FieldContainer>
          <HalfInputContainer>
            <Label for="cost-of-tier">Cost in &#36;</Label>
            <InputField id="cost-of-tier" type="text" placeholder="For example: 5" />
          </HalfInputContainer>
          <HalfInputContainer>
            <Label for="label-of-tier">Tier Title</Label>
            <InputField id="label-of-tier" type="text" placeholder="For example: Basic" />
          </HalfInputContainer>
        </FieldContainer>
        <FieldContainer>
          <FullInputContainer>
            <Label for="description-of-tier">Tier Description</Label>
            <TextAreaField rows={8} id="description-of-tier" type="text" placeholder="For example: Access to all my experimental repos" />
          </FullInputContainer>
        </FieldContainer>
      </FormContainer>
    </ModalContainer>
  );
};

export default AddTierModal;
