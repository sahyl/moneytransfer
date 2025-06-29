"use client"
import SignInModal from '@/components/SignInModal';
import Image from 'next/image';
import SignOut from '@/components/SignOut';


export default function AuthWrapper({ session }: { session: any }) {
  

  

  if (session) {
    return (
      <div className="min-h-screen bg-black p-8">
        <h1>Welcome, {session.user?.name}!</h1>
        <div><Image className='rounded-full'src={session.user?.image} alt='image' width={54} height={4}/></div>
        <SignOut/>
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