import styled from "styled-components";
import ProfileDetails from "../components/ProfileDetails";
import TierDetails from "../components/TierDetails";

const ProfileContainer = styled.div``;

export default function Profile() {
  return (
    <ProfileContainer>
      <ProfileDetails />
      <TierDetails />
    </ProfileContainer>
  );
}

export function getStaticProps() {
  return {
    props: {
      clientId: process.env.GH_CLIENT_ID,
      redirectURI: process.env.GH_REDIRECT_URL
    }
  };
}
