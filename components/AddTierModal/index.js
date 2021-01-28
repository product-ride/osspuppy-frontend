import styled from 'styled-components';
import { useForm } from "react-hook-form";
import { PrimaryButton } from "../Button";
import Modal from '../Modal';
import {
  ErrorField,
  FieldContainer,
  FormContainer,
  FullInputContainer,
  HalfInputContainer,
  InputField,
  Label,
  TextAreaField
} from '../Form';

const Button = styled(PrimaryButton)`
  .h-10
`;

const AddTierModal = ({ close, onSubmit, isSubmitting, isOpen }) => {
  const { register, handleSubmit, errors } = useForm();
  const onKeyPress = (evt) => {
    if (!/^[0-9]+$/.test(evt.key)) evt.preventDefault()
  }

  return (
    <Modal isOpen={isOpen} heading="Add Tier" close={close}>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <FieldContainer>
          <HalfInputContainer>
            <Label htmlFor="cost-of-tier">Cost in &#36;</Label>
            <InputField onKeyPress={onKeyPress} name="minAmount" ref={register({ required: true })} id="cost-of-tier" type="text" placeholder="For example: 5" />
            {errors.minAmount && <ErrorField>cost is required</ErrorField>}
          </HalfInputContainer>
          <HalfInputContainer>
            <Label htmlFor="label-of-tier">Tier Title</Label>
            <InputField name="title" ref={register({ required: true })} id="label-of-tier" type="text" placeholder="For example: Basic" />
            {errors.title && <ErrorField>title is required</ErrorField>}
          </HalfInputContainer>
        </FieldContainer>
        <FieldContainer>
          <FullInputContainer>
            <Label htmlFor="description-of-tier">Tier Description</Label>
            <TextAreaField name="description" ref={register({ required: true })} rows={8} id="description-of-tier" type="text" placeholder="For example: Access to all my experimental repos" />
            {errors.description && <ErrorField>description is required</ErrorField>}
          </FullInputContainer>
        </FieldContainer>
        <FieldContainer>
          <Button isLoading={isSubmitting} loadingText="Submitting..." type="submit">Submit</Button>
        </FieldContainer>
      </FormContainer>
    </Modal>
  );
};

export default AddTierModal;
