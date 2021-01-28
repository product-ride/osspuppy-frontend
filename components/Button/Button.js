import styled from "styled-components";

export const BasicButton = styled.button`
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

export const PrimaryButton = styled(BasicButton)`
  background: #1ca4e3;
`;
