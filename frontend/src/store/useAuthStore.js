import {create} from 'zustand'
import { axiosInstance } from '../lib/axios.js'

export const useAuthStore = create((set) => ({
    authUser: null,
    isSignedIn: false,
    isLoggingIn: false,
    isUpdatingProfile: false,
    
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

    signup: async (data) => {
        try {
            const res = await axiosInstance.post('/auth/signup', data)
            set({
                authUser: res.data,
            })
        } catch (error) {
            console.error('Failed to signup:', error.message)
        }
    }
    
}))

