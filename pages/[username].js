import { getProfileDetails } from '../api';
import ProfileDetails from "../components/ProfileDetails";
import TierDetails from "../components/TierDetails";
import ErrorPage from 'next/error'
import { useAuth } from '../hooks/auth';
import { NextSeo } from 'next-seo';

export default function Profile({ profileDetails = { tiers: [] }, err }) {
  const { user } = useAuth();
  const isCurrentUserProfile = user?.sub === profileDetails.username;

  return (
    <>
      <NextSeo
        title={`${profileDetails.name} | OSSPuppy`}
        description={`Get access to sponsorware from ${profileDetails.name} by sponsoring him on GitHub.`}
        openGraph={{
          title: `Sponsor ${profileDetails.name}`,
          description: `Get access to sponsorware from ${profileDetails.name} by sponsoring him on GitHub.`,
          images: [{
            url: profileDetails.avatar
          }]
        }}
      />
      {
        profileDetails && (
          <>
            <ProfileDetails profileDetails={profileDetails} />
            <TierDetails tiers={profileDetails.tiers} isCurrentUserProfile={isCurrentUserProfile} />
          </>
        )
      }
      {
        err && err.statusCode && (
          <ErrorPage statusCode={err.statusCode} />
        )
      }
    </>
  )
}

Profile.getInitialProps = async (cxt) => {
  const { username } = cxt.query;
  
  try {
    const profileDetails = await getProfileDetails(username);

    return {
      profileDetails
    }
  } catch(err) {
    if (cxt.res) {
      cxt.res.statusCode = err.statusCode;
    }

    return { err };
  }
}
