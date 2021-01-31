import { useForm } from 'react-hook-form';
import { PrimaryButton } from '../Button';
import {
  FieldContainer,
  FormContainer,
  FullInputContainer,
  ErrorField,
  Label,
  InputField,
  TextAreaField
} from '../Form';
import Modal from '../Modal';

export default function RepoModal({ isOpen, close, isSubmitting, onSubmit }) {
  const { register, handleSubmit, errors } = useForm();

  return (
    <Modal isOpen={isOpen} close={close} heading="Add Repo">
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <FieldContainer>
          <FullInputContainer>
            <Label htmlFor="repo">Repo</Label>
            <InputField name="name" ref={register({ required: true })} id="repo" type="text" placeholder="For example: styled-wind" />
            {errors.name && <ErrorField>repo is required</ErrorField>}
          </FullInputContainer>
        </FieldContainer>
        <FieldContainer>
          <FullInputContainer>
            <Label htmlFor="description-of-repo">Repo Description</Label>
            <TextAreaField name="description" ref={register({ required: true })} rows={8} id="description-of-repo" type="text" placeholder="For example: Magical implmentation of tailwind in styled-components" />
            {errors.description && <ErrorField>repo description is required</ErrorField>}
          </FullInputContainer>
        </FieldContainer>
        <FieldContainer>
          <PrimaryButton size="lg" isLoading={isSubmitting} loadingText="Submitting..." type="submit">Submit</PrimaryButton>
        </FieldContainer>
      </FormContainer>
    </Modal>
  )
}