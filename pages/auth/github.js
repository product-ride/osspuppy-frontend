import { useRouter } from "next/router";
import { useEffect } from 'react';
import { useAuth } from '../../hooks/auth';
import { getUserFromToken } from '../../utils';

export default function GitHubRedirect() {
  const router = useRouter();
  const { setToken, user } = useAuth();

  useEffect(() => {
    const token = router.query.token;

    if (token) {
      setToken(token);
      const user = getUserFromToken(token);
      
      router.push(`/${user.sub}`);
    }
  }, [router]);

  return <></>;
}
