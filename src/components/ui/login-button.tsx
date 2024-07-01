import { Button } from '@/components/ui/button';
import { signIn, signOut, useSession } from 'next-auth/react';

const LoginButton: React.FC = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <Button className="bg-blue-600 text-white" onClick={() => signOut()}>
        Sign Out
      </Button>
    );
  }

  return (
    <Button className="bg-blue-600 text-white" onClick={() => signIn()}>
      Sign In with Google Account
    </Button>
  );
};

export default LoginButton;
