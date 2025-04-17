import React from 'react'
import { SignUp } from '@clerk/clerk-react'
export default function Register() {
  return (
   <div className=' container'>
    <div className='flex items-center justify-center flex-col h-svh'>
   <h1 className=' font-semibold text-3xl capitalize'>Register now...</h1>
   <br/>
   <SignUp afterSignInUrl="/"/>

    </div>
   </div>
  )
}
