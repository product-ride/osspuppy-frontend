import styled from "styled-components";

 const Button = styled.button`
  .border-0;
  .px-4;
  .py-2;
  .ml-4;
  .text-white;
  .text-xs;
  .lg: text-sm;
  .rounded;
  cursor: pointer;
`;

export const BasicButton = ({ isLoading, loadingText, children, ...rest }) => (
  <Button {...rest} disabled={isLoading}>
    {!isLoading && children}
    {isLoading && (loadingText || 'Please wait...')}
  </Button>
);

export const PrimaryButton = styled(BasicButton)`
  background: #1ca4e3;
`;
