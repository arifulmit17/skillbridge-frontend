"use client";
import { Button } from '@/components/ui/button';
import { authClient } from '@/lib/auth-client';


export default function LogoutButton() {
    const handleLogout = async () => {
    await authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
        window.location.href = "/login";
      },
    },
  });
}
  return (
    <div>
       <Button onClick={handleLogout} variant="outline" size="sm">Logout</Button>
    </div>
  )
}
