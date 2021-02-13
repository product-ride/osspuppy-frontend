import styled from "styled-components";
import { useAuth } from '../../hooks/auth';
import { FaRegClipboard } from 'react-icons/fa';
import Clipboard from 'react-clipboard.js';
import { useToasts } from 'react-toast-notifications';
import { PrimaryButton } from '../Button';


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
  .flex;
  .pr-5;
  .items-center;
`;

const SecretsContainer = styled.div`
  .flex;
  .mt-4;
  .lg: px-32;
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
  .mr-4;
  .text-sm;
`;

const BioItemsContainer = styled.div`
  .mt-2;
`;

const Title = styled.h3`
  .text-xl;
  .my-0;
  .mr-1;
  user-select: none;
`;

const ClipboardContainer = styled.div`
  & > button {
    border: 0;
    background: transparent;
    outline: none;
    .hover:text-gray-700;
    .active:text-gray-800;
    cursor: pointer;
  }
`;

const Note = styled.div`
  color: red;
  font-size: 12px;
  .mt-4;
  .px-4;
  .lg: px-32;
`;

const ClipboardBtn = ({ text, onSuccess }) => {
  return (
    <ClipboardContainer>
      <Clipboard data-clipboard-text={text} onSuccess={onSuccess}>
        <FaRegClipboard />
      </Clipboard>
    </ClipboardContainer>
  )
}

const ProfileDetails = ({ profileDetails }) => {
  const { user } = useAuth();
  const { addToast } = useToasts();
  const isCurrentUserProfile = user?.sub === profileDetails.username;

  return (
    <>
      <ProfileDetailsContainer>
        <ProfileImage>
          <img
            src={profileDetails.avatar}
            alt="Profile Image"
          />
        </ProfileImage>
        <ProfileBio>
          <Title>{profileDetails.name}</Title>
          {profileDetails.bio && <p>{profileDetails.bio}</p>}
          <BioItemsContainer>
            <BioItems suppressHydrationWarning={true}>
              {isCurrentUserProfile && user.email}
              {!isCurrentUserProfile && (
                <PrimaryButton onClick={() => {
                  window.open(`https://github.com/sponsors/${profileDetails.username}`);
                }}>
                  Sponsor
                </PrimaryButton>
              )}
            </BioItems>
          </BioItemsContainer>
        </ProfileBio>
      </ProfileDetailsContainer>
      <div suppressHydrationWarning={true}>
        {
          isCurrentUserProfile && (
            <SecretsContainer>
              <Secret>
                <Title>Webhook Endpoint:</Title>
                {`https://${process.env.NEXT_PUBLIC_BACKEND_HOST}/webhooks/sponsor/${profileDetails.username}`}
                <ClipboardBtn text={`https://${process.env.NEXT_PUBLIC_BACKEND_HOST}/webhooks/sponsor/${profileDetails.username}`} onSuccess={() => {
                   addToast('Copied endpoint to clipboard', {
                    appearance: 'info',
                    autoDismiss: true
                  });
                }} />
              </Secret>
              <Secret>
                <Title>Webhook Secret:</Title>
                {user.sponsorWebhookSecret}
                <ClipboardBtn text={user.sponsorWebhookSecret} onSuccess={() => {
                   addToast('Copied secret to clipboard', {
                    appearance: 'info',
                    autoDismiss: true
                  });
                }} />
              </Secret>
            </SecretsContainer>
          )
        }
      </div>
      <Note>
        Important: When adding secret, change the Content type to 'application/json'
      </Note>
    </>
  );
};

export default ProfileDetails;
