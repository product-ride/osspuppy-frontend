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

const Layout = ({ children, clientId, backendHost }) => {
  const router = useRouter();
  const { isLoggedIn, logout } = useAuth();
  const isServer = typeof window === "undefined";
  const logoutUser = () => {
    logout();

    router.push("/");
  };
  const redirectURI = `https://${backendHost}/auth/github`;
  const ghURL = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirectURI=${redirectURI}`;
  
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
              <Signin onClick={() => (window.location = ghURL)}>
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
