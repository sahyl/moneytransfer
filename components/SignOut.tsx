'use client'
import React from 'react'
import { Button } from './ui/button'
import SameSame from './SameSame'
import { signOut } from 'next-auth/react'
import { LogOut } from 'lucide-react'

const SignOut = () => {
  return (
    <div>
        <Button
        onClick={() => signOut({ callbackUrl: "/" })}
className="ml-2 bg-gradient-to-br from-blue-500 to-indigo-900 hover:from-red-300 hover:to-red-500 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
      >
        <LogOut/>
        </Button>



      
    </div>
  )
}

export default SignOut
