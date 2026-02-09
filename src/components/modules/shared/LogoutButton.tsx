"use client";
import { Button } from '@/components/ui/button';
import { authClient } from '@/lib/auth-client';
import { toast } from 'sonner';


export default function LogoutButton() {
    const handleLogout = async () => {
    await authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
        toast.success("Logged out successfully")
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
