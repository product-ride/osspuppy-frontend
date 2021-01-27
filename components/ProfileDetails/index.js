import styled from "styled-components";
import { useAuth } from '../../hooks/auth/auth';

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

const ProfileDetails = ({ backendHost }) => {
  const { user } = useAuth();
  const sponsorEndpoint = `https://${backendHost}/webhooks/sponsor`;
  
  return (
    user && (
      <>
        <ProfileDetailsContainer>
          <ProfileImage>
            <img
              src={user.avatar}
              alt="Profile Image"
            />
          </ProfileImage>
          <ProfileBio>
            <Title>{user.name}</Title>
            Your GitHub Sponsors profile was approved and is now public! Now
            others can sponsor you from your user profile and user hovercard.
            <BioItemsContainer>
              <BioItems>{user.email}</BioItems>
            </BioItemsContainer>
          </ProfileBio>
        </ProfileDetailsContainer>
        <Secret>
          <Title>Sponsor Webhook Endpoint:</Title>
          {sponsorEndpoint}
        </Secret>
      </>
    )
  );
};

export default ProfileDetails;
