import styled from "styled-components";

 const BasicButton = styled.button`
  .border-0;
  .px-4;
  .py-2;
  .ml-4;
  .text-white;
  .text-xs;
  .lg: text-sm;
  .rounded;
  cursor: pointer;
  outline: none;
`;

export const Button = ({ isLoading, loadingText, children, ...rest }) => (
  <BasicButton {...rest} disabled={isLoading}>
    {!isLoading && children}
    {isLoading && (loadingText || 'Please wait...')}
  </BasicButton>
);

export const PrimaryButton = styled(Button)`
  background: #1ca4e3;
`;
