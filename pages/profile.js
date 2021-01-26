import styled from "styled-components";
import ProfileDetails from "../components/ProfileDetails";
import TierDetails from "../components/TierDetails";

const ProfileContainer = styled.div``;

export default function Profile({ backendHost }) {
  return (
    <ProfileContainer>
      <ProfileDetails backendHost={backendHost} />
      <TierDetails />
    </ProfileContainer>
  );
}

export function getStaticProps() {
  return {
    props: {
      backendHost: process.env.BACKEND_HOST
    }
  };
}
