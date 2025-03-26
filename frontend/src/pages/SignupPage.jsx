import React, { useState } from 'react'
// import { useAuthStore } from '../store/useAuthStore'
import { MessageSquareShare, User } from 'lucide-react'
const SignupPage = () => {
  // const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  })
  // const {signup, isSigningUp } = useAuthStore();

  // const validateForm = () => {}

  const handleSubmit = async (e) => {
    e.preventDefault();

  }

  return (
    <div className='min-h-screen grid lg:grid-cols-2'>

      {/* left side */}
      <div className='flex items-center justify-center flex-col p-6 sm:p-12'>
        
        <div className='w-full max-w-md space-y-8'>
          {/* App name and logo */}
            <div className="text-center mb-8">
              <div className="flex flex-col items-center gap-2 group">
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <MessageSquareShare className="size-6 text-primary"/>
                {/* Our app name: Whispr */}
                </div>
                <h1 className='text-2xl font-bold mt-2'>Create Account</h1>
                <p className="text-base-content/60">Get your account in seconds</p>
              </div>
            </div>
          
          {/* Form */}
            <form onSubmit={handleSubmit} className='space-y-6'>
              
              <div className="form-control">
                <label htmlFor="" className="label">
                  <span className="label-text font-medium">Full Name</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className='size-5 text-base-content/60'/>
                  </div>
                  <input
                   type='text'
                   className={`input input-bordered w-full pl-10`}
                   placeholder='Enter your full name'
                   value={formData.fullName}
                   onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  />
                </div>
                </div>
              </form>          
        </div>
        
      </div>
   
    </div>
  )
}

export default SignupPage