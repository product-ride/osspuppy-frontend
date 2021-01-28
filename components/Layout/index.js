import { useRouter } from "next/router";
import {
  Header,
  LogoContainer,
  MenuItems,
  Logo,
  LayoutContainer,
  Upgrade,
  Signin,
  Logout
} from "./Layout.styles";
import { useAuth } from '../../hooks/auth/auth';
import { getGHRedirectUrl } from '../../utils';

const Layout = ({ children }) => {
  const router = useRouter();
  const { isLoggedIn, logout } = useAuth();
  const isServer = typeof window === "undefined";
  const logoutUser = () => {
    logout();

    router.push("/");
  };
  
  return (
    <>
      <Header>
        <LogoContainer>
          <Logo src="/puppy.svg" alt="OSS Puppy" />
        </LogoContainer>
        <MenuItems>
          <Upgrade>Upgrade</Upgrade>
          {
            !isServer && !isLoggedIn && (
              <Signin onClick={() => (window.location = getGHRedirectUrl())}>
                Sign in with Github
              </Signin>
            )
          }
          {
            !isServer && isLoggedIn && (
              <Logout onClick={logoutUser}>Logout</Logout>
            )
          }
        </MenuItems>
      </Header>
      <LayoutContainer>{children}</LayoutContainer>
    </>
  );
};

export default Layout;
