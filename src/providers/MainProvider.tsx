'use client'
// import { ToastContainer } from 'react-toastify'
import { AuthProvider } from './SessionProvider'

export const MainProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div>
                <AuthProvider>
                    {children}

                </AuthProvider>
            </div>
            {/* <ToastContainer
                position='bottom-right' /> */}
        </>
    )
}



