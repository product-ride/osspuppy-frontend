import '../styles/globals.css'
import Layout from '../components/Layout';
import { ServerStyleSheet } from 'styled-components';
import AuthProvider from '../contexts/auth/auth';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout {...pageProps}><Component {...pageProps} /></Layout>
    </AuthProvider>
  )
}

export async function getInitialProps(ctx) {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          sheet.collectStyles(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    };
  } finally {
    sheet.seal();
  }
}

export default MyApp
