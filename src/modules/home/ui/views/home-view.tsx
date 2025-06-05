'use client';

import { useSession } from '@/lib/auth-client';

export const HomeView = () => {
  const { data: session } = useSession();

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome {session?.user.name}</p>
    </div>
  );
};
