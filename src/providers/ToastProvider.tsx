'use client'
import { ToastContainer } from 'react-toastify'

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <ToastContainer
                draggable
                closeOnClick
                stacked
                position='bottom-right'
            />
            {children}
        </div>
    )
}



