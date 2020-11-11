import { useRouter } from "next/router";

export default function GitHubRedirect() {
  const router = useRouter();

  if (router.query.token) {
    localStorage.setItem("oss_puppy_jwt", router.query.token);
    router.push("/profile");
  }

  return <span>Redirecting...</span>;
}

export function getStaticProps() {
  return {
    props: {
      clientId: process.env.GH_CLIENT_ID,
      redirectURI: process.env.GH_REDIRECT_URL
    }
  };
}
