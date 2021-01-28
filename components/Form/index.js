import styled from 'styled-components';

export const Label = styled.label`
  .block;
  .uppercase;
  .tracking-wide;
  .text-gray-700;
  .text-xs;
  .font-bold;
  .mb-3;
`;

export const FieldContainer = styled.div`
  .flex;
  .flex-wrap;
  .justify-between;
  .-mx-3;
  .mb-6;
`;

export const HalfInputContainer = styled.div`
  .w-full; 
  .md:w-1/2;
  .px-3;
  .mb-6;
  .md:mb-0;
`;

export const FullInputContainer = styled.div`
  .w-full; 
  .px-3;
  .mb-6;
  .md:mb-0;
`;

export const InputField = styled.input`
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

export const TextAreaField = styled.textarea`
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

export const ErrorField = styled.div`
  .text-xs;
  .mt-1;
  color: red;
`;

export const FormContainer = styled.form`
  .p-5;
  .w-full;
`;
