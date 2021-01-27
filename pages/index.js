import LandingPage from "../components/LandingPage";
import Details from "../components/Details";
import Footer from "../components/Footer";

export default function Home({clientId, backendHost}) {
  const redirectURI = `https://${backendHost}/auth/github`;
  
  return (
    <div>
      <LandingPage clientId={clientId} redirectURI={redirectURI}/>
      <Details />
      <Footer />
    </div>
  )
}

export function getStaticProps() {
  return {
    props: {
      clientId: process.env.GH_CLIENT_ID,
      backendHost: process.env.BACKEND_HOST
    }
  }
}
