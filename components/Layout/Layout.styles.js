import styled from "styled-components";

export const LayoutContainer = styled.div`
  .max-h-full;
  height: 100vh;
`;
export const Header = styled.div`
  .sticky;
  .px-4;
  .lg: px-32;
  .flex;
  .justify-between;
  .items-center;
  .py-4;
  .top-0;
  .max-w-full;
  .w-full;
  .text-gray-900;
  .text-sm;
  .bg-white;
  box-shadow: 0px -1px 0px 0px inset rgba(0,0,0,0.1);
`;

export const Logo = styled.img`
  .h-16;
`;
export const LogoContainer = styled.div`
  .w-1/3;
  .lg:w-1/2;
`;
export const MenuItems = styled.div`
  .flex;
  .justify-end;
  .w-2/3;
  .lg:w-1/2;
`;

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

export const Upgrade = styled(BasicButton)`
  background: #ff0080;
`;
export const Signin = styled(BasicButton)`
  background: #1b232f;
`;

export const Logout = styled(BasicButton)`
    .bg-white;
    .text-black;
    .border-2;
    .border-black;
`
