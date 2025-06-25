"use client"
import { signOut, useSession } from 'next-auth/react';
import SignInModal from '@/components/SignInModal';
import Image from 'next/image';

export default function AuthWrapper({ session }: { session: any }) {
  

  

  if (session) {
    return (
      <div className="min-h-screen bg-black p-8">
        <h1>Welcome, {session.user?.name}!</h1>
        <div><Image className='rounded-full'src={session.user?.image} alt='image' width={54} height={4}/></div>
        {/* Your authenticated content */}


        <button
        onClick={() => signOut({ callbackUrl: "/" })}
        className=" ml-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
      >
        signout
      </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Your App
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Get started with your account today
        </p>
        <SignInModal />
      </div>
    </div>
  );
}