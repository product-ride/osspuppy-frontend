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

const Layout = ({ children, clientId, redirectURI }) => {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("oss_puppy_jwt");
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
          <Signin onClick={() => (window.location = ghURL)}>
            Sign in with Github
          </Signin>
          <Logout onClick={logout}>Logout</Logout>
        </MenuItems>
      </Header>
      <LayoutContainer>{children}</LayoutContainer>
    </>
  );
};

export default Layout;
