import styled from "styled-components";

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
  .lg: w-9/12;
`;

const Steps = styled.p`
  .text-xl;
  .text-center;
  .mt-2;
  .w-full;
  .lg: w-7/12;
  .lg: max-w-7/12;
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
  .lg: flex-row;
  .w-full;
`;

const FeaturesContainer = styled.div`
  .flex;
  .justify-between;
  .flex-col;
  .lg:flex-row;
  .w-full;
  .lg: w-7/12;
  .lg: mx-auto;
  .mb-8;
  .p-4;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 30px 60px 0px;
`;

const StandardContainer = styled.div`
  .w-full;
  .p-4;
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
`;
const ProBox = styled(Box)`
  background: #ff017f;
`;

const ProContainer = styled.div`
  .w-full;
  .p-4;
`;

const Feature = styled.li`
  .my-4;
  .px-4;
`;

const Details = () => {
  return (
    <>
      <DetailsContainer>
        <Description>
          OSSPuppy is a tool for Open source developers and maintainers who wish
          to automate tasks for their sponsors. They the Sponsorship tiers and
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
          <Feature>Personlized Profile</Feature>
          <Feature>Create Sponsorship Tiers</Feature>
          <Feature>Assign access roles to sponsors</Feature>
          <Feature>Assignn repo level access based on tiers</Feature>
          <Feature>Auto-label PRs and Issues by Tiers</Feature>
          <Feature>Private repos appears in Search with Description only </Feature>
        </StandardContainer>
        <ProContainer>
          <ProBox>
            <span>Premium Plan</span> <div>Coming soon</div>
          </ProBox>
          <Feature>Personlized Profile</Feature>
          <Feature>Create Sponsorship Tiers</Feature>
          <Feature>Assign access roles to sponsors</Feature>
          <Feature>Assignn repo level access based on tiers</Feature>
          <Feature>Auto-label PRs and Issues by Tiers</Feature>
          <Feature>Private repos appears in Search with Description only </Feature>
          <Feature>Dashboard with Analytics</Feature>
          <Feature>Email notifications and Summaries</Feature>
          <Feature>Customized Automation</Feature>
          <Feature>and much more...</Feature>
        </ProContainer>
      </FeaturesContainer>
    </>
  );
};

export default Details;
