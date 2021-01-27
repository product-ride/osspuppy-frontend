import '../styles/globals.css'
import Layout from '../components/Layout';
import AuthProvider from '../contexts/auth/auth';
import { ToastProvider } from 'react-toast-notifications';

function MyApp({ Component, pageProps }) {
  return (
    <ToastProvider placement="bottom-right" autoDismissTimeout={2000}>
      <AuthProvider>
          <Layout {...pageProps}><Component {...pageProps} /></Layout>
      </AuthProvider>
    </ToastProvider>
  )
}

export default MyApp
