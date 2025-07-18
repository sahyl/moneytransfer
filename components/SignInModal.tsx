"use client";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { X } from "lucide-react";
import GoogleIcon from "./icons/GoogleIcon";

const SignInModal = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      await signIn("google", { callbackUrl: "/dashboard",});
    } catch (error) {
      console.error("Sign-in error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
          Join Now
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent  className="bg-gray-200 border-none">
        <div className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition-colors">
          <AlertDialogCancel className=" bg-gray-200 border-none p-0 m-0">
            <X size={24} />
          </AlertDialogCancel>
        </div>

        {/* Header */}
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center mb-6 text-2xl font-bold">
            Sign in to get started
          </AlertDialogTitle>
        </AlertDialogHeader>

        {/* Google Sign-In */}
        <Button
          variant="secondary"
          onClick={handleGoogleSignIn}
          disabled={isLoading}
          className=" border-none w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-3 px-4 rounded-lg transition-all duration-200 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
          ) : (
            <>
              <GoogleIcon/>
              Continue with Google
            </>
          )}
        </Button>

        <p className="text-xs text-gray-500 mt-4 text-center">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SignInModal;
