import '../styles/globals.css'
import Layout from '../components/Layout';
import AuthProvider from '../contexts/auth';
import { ToastProvider } from 'react-toast-notifications';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider placement="bottom-right" autoDismissTimeout={2000}>
        <AuthProvider>
            <Layout {...pageProps}><Component {...pageProps} /></Layout>
        </AuthProvider>
      </ToastProvider>
    </QueryClientProvider>
  )
}

export default MyApp
