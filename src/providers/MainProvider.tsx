'use client'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from './SessionProvider'
import { usePathname } from 'next/navigation'
import { GlobalLoader } from '@/components/layout/GlobalLoader/GlobalLoader'

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



