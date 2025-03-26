import {create} from 'zustand'
import { axiosInstance } from '../lib/axios.js'
import toast from 'react-hot-toast'

export const useAuthStore = create((set) => ({
    authUser: null,
    isSignedIn: false,
    isLoggingIn: false,
    isUpdatingProfile: false,
    isSigningUp: false,
    isCheckingAuth: true,

    checkAuth: async () => {
        try {
            const res = await axiosInstance.get('/auth/check')
            set({
                authUser: res.data,
            })
        } catch (error) {
            console.error('Failed to check authentication:', error.message)
            set({
                authUser: null,
            })
        } finally {
            set({
                isCheckingAuth: false,
            })
        }
    },

    login: async (data) => {
        set({
            isLoggingIn: true,
        })
        try {
            const res = await axiosInstance.post('/auth/login', data)
            set({
                authUser: res.data,
            })
            toast.success('Logged in successfully')
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to login')
        } finally {
            set({
                isLoggingIn: false,
            })
        }
    },

    signup: async (data) => {
        set({
            isSigningUp: true,
        })
        try {
            const res = await axiosInstance.post('/auth/signup', data)
            set({
                authUser: res.data,
            })
            toast.success('Account created successfully')
        } catch (error) {
            toast.error(error.response.data.message)
        } finally {
            set({
                isSigningUp: false,
            })
        }
        
    },
    
    logout: async () => {
        try {
            await axiosInstance.post('/auth/logout')
            set({
                authUser: null,
            })
            toast.success('Logged out successfully')
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
}))

