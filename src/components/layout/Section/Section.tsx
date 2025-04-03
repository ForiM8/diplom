import { HTMLAttributes, ReactNode } from 'react'
import styles from './Section.module.scss'

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
}

export const Section = ({ children, ...props }: SectionProps) => {
    return (
        <div {...props} className={`${styles.container} ${props.className}`}>
            {children}
        </div>
    )
}
