import '../styles/globals.css'
import Layout from '../components/Layout';
import AuthProvider from '../contexts/auth/auth';
import { ToastProvider } from 'react-toast-notifications';

function MyApp({ Component, pageProps, backendHost }) {
  return (
    <ToastProvider placement="bottom-right" autoDismissTimeout={2000}>
      <AuthProvider>
          <Layout backendHost={backendHost} {...pageProps}><Component {...pageProps} /></Layout>
      </AuthProvider>
    </ToastProvider>
  )
}

export function getStaticProps() {
  return {
    props: {
      backendHost: process.env.BACKEND_HOST
    }
  }
}

export default MyApp
