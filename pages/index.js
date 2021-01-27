import LandingPage from "../components/LandingPage";
import Details from "../components/Details";
import Footer from "../components/Footer";

export default function Home() {
  const redirectURI = `https://${process.env.NEXT_PUBLIC_BACKEND_HOST}/auth/github`;
  
  return (
    <div>
      <LandingPage clientId={process.env.NEXT_PUBLIC_GH_CLIENT_ID} redirectURI={redirectURI}/>
      <Details />
      <Footer />
    </div>
  )
}
