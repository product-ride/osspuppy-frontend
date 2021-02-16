import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

const DetailsContainer = styled.div`
  .w-full;
  .flex;
  .justify-center;
  .items-center;
  .flex-col;
  .my-16;
  .p-8;
  .lg:px-32;
  background: #f9f9f9;
`;

const Description = styled.p`
  .text-xl;
  .text-center;
  .w-full;
  .lg:w-9/12;
`;

const Steps = styled.p`
  .text-xl;
  .text-center;
  .mt-2;
  .w-full;
  .lg:w-7/12;
  .lg:max-w-7/12;
  .px-4;
`;

const Title = styled.h3`
  .text-2xl;
  .text-center;
`;

const StepsContainer = styled.div`
  .flex;
  .justify-around;
  .flex-col;
  .lg:flex-row;
  .w-full;
`;

const FeaturesContainer = styled.div`
  .flex;
  .justify-between;
  .flex-col;
  .lg:flex-row;
  .w-full;
  .lg:w-7/12;
  .lg:mx-auto;
  .mb-8;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 30px 60px 0px;
  border-radius: 15px;
`;

const StandardContainer = styled.div`
  .w-full;
`;

const Box = styled.div`
  .flex;
  .text-center;
  .justify-center;
  .items-center;
  .flex-col;
  .p-6;
  .text-white;
  .font-bold;
  div {
    margin-top: 5px;
    font-weight: 400;
  }
`;

const StandardBox = styled(Box)`
  background: #0070f3;
  border-radius: 15px 0 0 0;
`;

const ProBox = styled(Box)`
  background: #ff017f;
  border-radius: 0 15px 0 0;
`;

const ProContainer = styled.div`
  .w-full;
`;

const FeatureItem = styled.li`
  .my-5;
  .flex;
  .items-center;
`;

const FeatureText = styled.div`
  .ml-2;
`;

const FeatureList = styled.ul`
  list-style-type: none;
  .pl-5;
`;

const CheckedIcon = styled(FaCheck)`
  color: green;
`;

const Feature = ({ children }) => (
  <FeatureItem>
    <CheckedIcon />
    <FeatureText>{children}</FeatureText>
  </FeatureItem>
);

const Details = () => {
  return (
    <>
      <DetailsContainer>
        <Description>
          OSSPuppy is a tool for Open source developers and maintainers who wish
          to automate tasks for their sponsors. Set the Sponsorship tiers and
          the corresponding benefits and sit back and relax. We maintain
          everything else
        </Description>
        <Title>How it works?</Title>
        <StepsContainer>
          <Steps>1. Sign in with Github</Steps>
          <Steps>2. Enter your details and Tiers</Steps>
          <Steps>3. Add your OSSPuppy secret to Github Webhooks</Steps>
          <Steps>4. Sit back and relax. We will take care of everything</Steps>
        </StepsContainer>
      </DetailsContainer>
      <Title>Features</Title>
      <FeaturesContainer>
        <StandardContainer>
          <StandardBox>
            <span>Standard Plan</span> <div>Forever free</div>
          </StandardBox>
          <FeatureList>
            <Feature>Personalized Profile</Feature>
            <Feature>Create Sponsorship Tiers</Feature>
            <Feature>Assign repo level access based on tiers</Feature>
          </FeatureList>
        </StandardContainer>
        <ProContainer>
          <ProBox>
            <span>Premium Plan</span> <div>Coming soon</div>
          </ProBox>
          <FeatureList>
            <Feature>Everything in standard</Feature>
            <Feature>Auto-label PRs and Issues by Tiers</Feature>
            <Feature>Dashboard with Analytics</Feature>
            <Feature>Email notifications and Summaries</Feature>
            <Feature>Customized Automation</Feature>
          </FeatureList>
        </ProContainer>
      </FeaturesContainer>
    </>
  );
};

export default Details;
