import LandingPage from "../components/LandingPage";
import Details from "../components/Details";
import Footer from "../components/Footer";
import { NextSeo } from 'next-seo';
import absoluteUrl from "next-absolute-url";

export default function Home({ origin }) {
  return (
    <>
      <NextSeo
        title="OSSPuppy"
        description="A OSS tool that helps OSS developers to maintain OSS projects and sponsors."
        openGraph={{
          title: "OSSPuppy",
          description: "A OSS tool that helps OSS developers to maintain OSS projects and sponsors.",
          images: [{
            width: 400,
            height: 344,
            url: `${origin}/logo.png`
          }]
        }}
        twitter={{
          cardType: 'summary_large_image'
        }}
      />
      <div>
        <LandingPage />
        <Details />
        <Footer />
      </div>
    </>
  )
}

Home.getInitialProps = async ({ req }) => {
  const { origin } = absoluteUrl(req);

  return { origin };
};
