"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import SignInModal from "@/components/SignInModal";
import { Loader2 } from "lucide-react";

export default function HomePage() {
  const { status } = useSession();
  const router = useRouter();

  // useEffect(() => {
  //   if (status === "authenticated") {
  //     router.prefetch("/dashboard");
  //     router.push("/dashboard");
  //   }
  // }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex bg-gradient-to-br from-blue-300 to-indigo-500 justify-center items-center h-screen">
        <Loader2 className="w-10 h-10 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 to-indigo-500 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to MONEY TRANSFER
        </h1>
        <p className="text-xl text-gray-800 mb-8">
          Get started with your account today
        </p>
        <SignInModal />
      </div>
    </div>
  );
}
