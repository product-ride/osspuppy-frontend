import styled from "styled-components";
import { useRouter } from "next/router";
import { useAuth } from "../../hooks/auth";
import { getGHRedirectUrl } from "../../utils";
import { Button } from "../Button";
import Link from 'next/link'

const LayoutContainer = styled.div`
  .max-h-full;
  height: 100vh;
`;

const Header = styled.div`
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
  z-index: 9;
`;

const Logo = styled.img`
  .h-16;
  cursor: pointer;
`;

const LogoContainer = styled.div`
  .w-1/3;
  .lg:w-1/2;
`;

const MenuItems = styled.div`
  .flex;
  .justify-end;
  .w-2/3;
  .lg:w-1/2;
`;

const ActionButton = styled(Button)`
  .bg-white;
  .border-2;
  .border-black;
  .text-black;
  .ml-4;
`;

const Upgrade = styled.button`
  .border-0;
  .px-4;
  .py-2;
  .text-white;
  .text-xs;
  .lg: text-sm;
  .rounded;
  cursor: pointer;
  outline: none;
`;

const Layout = ({ children }) => {
  const router = useRouter();
  const { isLoggedIn, logout, user } = useAuth();
  const logoutUser = () => {
    logout();

    router.push("/");
  };

  return (
    <>
      <Header>
        <Link href="/">
          <LogoContainer>
            <Logo src="/puppy.svg" alt="OSS Puppy" />
          </LogoContainer>
        </Link>
        <MenuItems>
          {isLoggedIn && (
            <Upgrade
              onClick={() => {
                router.push(`/${user.sub}`);
              }}
            >
              My Profile
            </Upgrade>
          )}
          <ActionButton
            suppressHydrationWarning={true}
            onClick={() => {
              if (isLoggedIn) logoutUser();
              else window.location = getGHRedirectUrl();
            }}
          >
            {isLoggedIn ? "Logout" : "Sign in with Github"}
          </ActionButton>
        </MenuItems>
      </Header>
      <LayoutContainer>{children}</LayoutContainer>
    </>
  );
};

export default Layout;
