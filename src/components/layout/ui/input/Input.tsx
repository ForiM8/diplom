
import clsx from 'clsx'
import { forwardRef, InputHTMLAttributes } from 'react'
import styles from './Input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    variant?: 'default' | 'navigation' | 'form' | 'form-big'
    color?: 'white' | 'gray'
    label?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        { className, variant = 'default', label, color = 'white', ...props },
        ref
    ) => {
        return (
            <div className={`${styles.wrapper} ${className}`}>
                {/* LABEL  */}
                {label && <p className={`${styles.label}`}>{label}</p>}
                {/* INPUT  */}
                <input
                    ref={ref}
                    style={{
                        backgroundColor:
                            color === 'white'
                                ? '#fff'
                                : color === 'gray'
                                    ? '#e0e0e0'
                                    : '#e0e0e0',
                    }}
                    className={clsx(styles.input, {
                        [styles.form]: variant === 'form',
                        [styles.form_big]: variant === 'form-big',
                    })}
                    {...props}
                />

            </div>
        )
    }
)

Input.displayName = 'Input'

export { Input }
