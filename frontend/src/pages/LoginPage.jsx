import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthStore } from "../store/useAuthStore"
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquareShare } from 'lucide-react'
import { Link } from 'react-router-dom'
import AuthImagePattern from '../components/AuthImagePattern'

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const {login, isLoggingIn} = useAuthStore()

  const validateForm = () => {
    if(!formData.email.trim()) return toast.error('Email is required')
    if(!/^\S+@\S+\.\S+$/.test(formData.email)) return toast.error('Invalid email address')
    if(!formData.password.trim()) return toast.error('Password is required')
    if(formData.password.length < 6) return toast.error('Password must be at least 6 characters long')

    return true
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const isValid = validateForm()
    if(isValid === true) login(formData)
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
              </div>
              <h1 className='text-2xl font-bold mt-2'>Welcome Back</h1>
              <p className="text-base-content/60">Sign in to your account</p>
            </div>
          </div>
          
          {/* Form */}
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className="form-control">
              <label htmlFor="" className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 pl-3 flex items-center z-10 pointer-events-none">
                  <Mail className='size-5 text-base-content/60'/>
                </div>
                <input
                  type='email'
                  className={`input input-bordered w-full pl-10`}
                  placeholder='Enter your email'
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="form-control">
              <label htmlFor="" className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 pl-3 flex items-center z-10 pointer-events-none">
                  <Lock className='size-5 text-base-content/60'/>
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className={`input input-bordered w-full pl-10`}
                  placeholder='Enter your password'
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
                <button type="button" 
                  className='absolute inset-y-0 right-0 pr-3 flex items-center z-10'
                  onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <EyeOff className='size-5 text-base-content/60'/>
                  ) : (
                    <Eye className='size-5 text-base-content/60'/>
                  )}
                </button>
              </div>
            </div>

            <button type='submit' className='btn btn-primary w-full' disabled={isLoggingIn}>
              {isLoggingIn ? (
                <>
                  <Loader2 className='size-5 animate-spin mr-2'/>
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>  

          <div className="text-center">
            <p className="text-base-content/60">Don't have an account? <Link to="/signup" className='link text-primary'>Sign up</Link></p>
          </div>        
        </div>
      </div>

      {/* right side */}
      <AuthImagePattern
        title="Welcome Back!"
        subtitle="Reconnect with your loved ones"
      />
    </div>
  )
}

export default LoginPage