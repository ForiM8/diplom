'use client'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { ButtonHTMLAttributes, forwardRef } from 'react'
import styles from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?:
    | 'inFavorite'
    | 'primary'
    | 'secondary'
    | 'muted'
    | 'credit'
    | 'small-destructive'
    | 'small'
    | 'blue'
    | 'border_blue'
    | 'plus'
    | 'up'
    | 'inFavoriteMain'
    | 'noFavoriteCards'
    href?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, variant = 'primary', href, onClick, ...props }, ref) => {
        const router = useRouter()

        const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
            if (href) {
                router.push(href)
            }
            if (onClick) {
                onClick(e)
            }
        }

        return (
            <button
                onClick={(e) => handleClick(e)}
                {...props}
                ref={ref}
                type={props.type}
                className={clsx(
                    styles.button,
                    props.className,
                    {
                        [styles.up]: variant === 'up',
                        [styles.plus]: variant === 'plus',
                        [styles.blue]: variant === 'blue',
                        [styles.border_blue]: variant === 'border_blue',
                        [styles.inFavorite]: variant === 'inFavorite',
                        [styles.noFavoriteCards]: variant === 'noFavoriteCards',
                        [styles.primary]: variant === 'primary',
                        [styles.secondary]: variant === 'secondary',
                        [styles.muted]: variant === 'muted',
                        [styles.credit]: variant === 'credit',
                        [styles.small]: variant === 'small',
                        [styles.small_destructive]: variant === 'small-destructive',
                        [styles.in_favorite_main]: variant === 'inFavoriteMain',
                    },
                    'lg:hover:opacity-60 duration-200 ease-in-out active:scale-[0.97]'
                )}
            >
                {children}
            </button>
        )
    }
)

Button.displayName = 'Button'

export { Button }
