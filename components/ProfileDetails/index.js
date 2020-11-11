import styled from "styled-components";

const ProfileDetailsContainer = styled.div`
  .px-4;
  .lg: px-32;
  .mt-4;
  .lg: mt-8;
  .flex;
  .flex-col;
  .lg:flex-row;
`;

const Secret = styled.div`
  .px-4;
  .lg: px-32;
  .mt-4;
  .flex;
  .items-center;
  .justify-end;
`;

const ProfileImage = styled.div`
  .h-32;
  .p-1;
  border-radius: 50%;
  img {
    max-height: 100%;
    border-radius: 50%;
  }
`;

const ProfileBio = styled.div`
  .ml-0;
  .lg:ml-4;
  .p-4;
  .relative;
`;

const BioItems = styled.span`
  .mr-8;
  .text-sm;
`;

const BioItemsContainer = styled.div`
  .mt-4;
`;

const Title = styled.h3`
  .text-2xl;
  .my-0;
  .mr-4;
`;

const ProfileDetails = () => {
  return (
    <>
      <ProfileDetailsContainer>
        <ProfileImage>
          <img
            src="https://avatars0.githubusercontent.com/u/11838711?v=4"
            alt="Profile Image"
          />
        </ProfileImage>
        <ProfileBio>
          <Title>Vilva Athiban P B</Title>
          Your GitHub Sponsors profile was approved and is now public! Now
          others can sponsor you from your user profile and user hovercard.
          <BioItemsContainer>
            <BioItems>vilvaathiban@gmail.com</BioItems>
            <BioItems>Bangalore</BioItems>
          </BioItemsContainer>
        </ProfileBio>
      </ProfileDetailsContainer>
      <Secret>
        <Title>Secret for GH Webhooks:</Title>bbhjbjbjhjbhbjbh
      </Secret>
    </>
  );
};

export default ProfileDetails;
