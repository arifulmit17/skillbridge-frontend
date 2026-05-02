"use client";

import { SignupForm } from "@/components/modules/authentication/signup-form";
import { Button } from "@/components/ui/button";
import { createAuthClient } from "better-auth/client";

export default function Page() {
  const authClient = createAuthClient();

  const signIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL:"http://localhost:4000" // Change this to your desired callback URL
    });
  };

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignupForm />
         {/* ✅ Google Sign In Button */}
      <Button
        onClick={signIn}
        className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Sign in with Google
      </Button>
      </div>

     
    </div>
  );
}