import LandingPage from "../components/LandingPage";
import Details from "../components/Details";
import Footer from "../components/Footer";

export default function Home({clientId, redirectURI}) {
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
      redirectURI: process.env.GH_REDIRECT_URL
    }
  }
}