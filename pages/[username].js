import { getProfileDetails } from '../api';
import ProfileDetails from "../components/ProfileDetails";
import TierDetails from "../components/TierDetails";
import ErrorPage from 'next/error'

export default function Profile({ profileDetails = { tiers: [] }, err }) {
  return (
    <>
      {
        profileDetails && (
          <>
            <ProfileDetails profileDetails={profileDetails} />
            <TierDetails tiers={profileDetails.tiers} />
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
