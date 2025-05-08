'use client'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from './SessionProvider'
import { usePathname } from 'next/navigation'

export const MainProvider = ({ children }: { children: React.ReactNode }) => {
    const path = usePathname()
    return (
        <>
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



