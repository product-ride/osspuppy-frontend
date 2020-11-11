import styled from "styled-components";
import { Signin, BasicButton } from "../Layout/Layout.styles";

const LandingPageContainer = styled.div`
    .flex;
    .justify-center;
    .items-center;
    .flex-col;
    .p-8;
    .lg:px-32;
    .pt-12;
`;

const Image =styled.img`
    .h-20;
    .lg:h-32;
`;

const Desc =styled.h3`
    .text-2xl;
    .lg:text-3xl;
    .w-12/12;
    .lg:w-8/12;
    .text-center;
    .mt-8;
`

const ButtonContainer = styled.div`
    .flex;
    .justify-between;
`

const SignIn = styled(Signin)`
    .text-xl;
    .lg:text-2xl;
    .p-4;
    .lg:mr-8;
`

const KnowMore = styled(BasicButton)`
    .text-xl;
    .lg:text-2xl;
    .text-black;
    .bg-white;
    .border-1;
`

const LandingPage = ({clientId, redirectURI}) => {
const ghURL = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirectURI=${redirectURI}`;
  return (
    <LandingPageContainer>
      <Image src="/oss_puppy.svg" alt="OSS Puppy" />
      <Desc>A OSS tool that helps OSS developers to maintain OSS projects and sponsors</Desc>
      <Desc>Get Started</Desc>
      <ButtonContainer>
          <SignIn onClick={() => window.location = ghURL}>Sign in with Github</SignIn>
          <KnowMore>Know More...</KnowMore>
      </ButtonContainer>
    </LandingPageContainer>
  );
};

export default LandingPage;
