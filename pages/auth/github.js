import { useRouter } from "next/router";
import { useEffect } from 'react';
import { useAuth } from '../../hooks/auth';

export default function GitHubRedirect() {
  const router = useRouter();
  const { setToken } = useAuth();

  useEffect(() => {
    if (router.query.token) {
      setToken(router.query.token);
      
      router.push("/profile");
    }
  }, [router]);

  return <></>;
}
