import React from 'react'
import { SignIn } from '@clerk/clerk-react'
export default function Login() {
  return (
   <div className=' container'>
    <div className='flex items-center justify-center flex-col h-svh'>
   <h1 className=' font-semibold text-3xl capitalize'>login now...</h1>
   <br/>
   <SignIn afterSignInUrl="/"/>

    </div>
   </div>
  )
}
