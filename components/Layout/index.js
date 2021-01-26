import { useRouter } from "next/router";
import { isUserLoggedIn, logout } from '../../utils';
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

const Layout = ({ children, clientId, redirectURI }) => {
  const router = useRouter();
  const isLoggedIn = isUserLoggedIn();

  const logoutUser = () => {
    logout();

    router.push("/");
  };

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
            !isLoggedIn && (
              <Signin onClick={() => (window.location = ghURL)}>
                Sign in with Github
              </Signin>
            )
          }
         {
           isLoggedIn && (
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
