import LeftArrow from '@/assets/icons/left-slider-arrow.svg'
import RightArrow from '@/assets/icons/right-slider-arrow.svg'
import clsx from 'clsx'
import { HTMLAttributes } from 'react'
import styles from './Buttons.module.scss'

interface ArrowsProps extends HTMLAttributes<HTMLSpanElement> { }

export const PrevArrow = (props: ArrowsProps) => {
    return (
        <span {...props} className={clsx(styles.prev)}>
            <LeftArrow />
        </span>
    )
}
export const NextArrow = (props: ArrowsProps) => {
    return (
        <span {...props} className={clsx(styles.next)}>
            <RightArrow />
        </span>
    )
}
