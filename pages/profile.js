import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styled from "styled-components";
import ProfileDetails from "../components/ProfileDetails";
import TierDetails from "../components/TierDetails";
import { useAuth } from '../hooks/auth/auth';

const ProfileContainer = styled.div``;

export default function Profile() {
  const router = useRouter();
  const { isLoggedIn } = useAuth();
 
  useEffect(() => {
    if (!isLoggedIn) {
      router.replace('/');
    }
  }, [isLoggedIn]);

  return isLoggedIn && (
    <ProfileContainer>
      <ProfileDetails />
      <TierDetails />
    </ProfileContainer>
  );
}
