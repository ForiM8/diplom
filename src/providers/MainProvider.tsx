'use client'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from './SessionProvider'
import { usePathname } from 'next/navigation'
import { GlobalLoader } from '@/components/layout/GlobalLoader/GlobalLoader'
import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
// import userStore from '@/stores/user/UserStores'

export const MainProvider = ({ children }: { children: React.ReactNode }) => {
    const path = usePathname()

    return (
        <>
            <GlobalLoader key={path} />
            <div>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </div>
            <ToastContainer
                position='bottom-right' />
        </>
    )
}



