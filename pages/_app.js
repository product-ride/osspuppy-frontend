import '../styles/globals.css'
import Layout from '../components/Layout';
import AuthProvider from '../contexts/auth/auth';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout {...pageProps}><Component {...pageProps} /></Layout>
    </AuthProvider>
  )
}

export default MyApp
