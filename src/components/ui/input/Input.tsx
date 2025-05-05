import SearchImage from '@/assets/images/search.png'
import clsx from 'clsx'
import { forwardRef, InputHTMLAttributes } from 'react'
import styles from './Input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    variant?: 'default' | 'navigation' | 'form' | 'form-big' | 'formAds'
    color?: 'white' | 'gray'
    label?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        { className, variant = 'default', label, color = 'white', ...props },
        ref
    ) => {
        console.log('formAds - ', variant)
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
                        [styles.navigation]: variant === 'navigation',
                        [styles.formAds]: variant === 'formAds',
                    })}
                    {...props}
                />
                {/* ACTION BUTTON  */}
                {variant === 'navigation' && (
                    <button>
                        {/* <img src={SearchImage} alt="" /> */}
                    </button>
                )}
            </div>
        )
    }
)

Input.displayName = 'Input'

export { Input }
