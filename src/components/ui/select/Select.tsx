'use client'

import ArrowImage from '@/assets/icons/arrow.svg'
import clsx from 'clsx'
import { useState } from 'react'
import styles from './Select.module.scss'
type Props = {
	items?: { label: string; value: string }[]
	placeholder?: string
	value?: { value: string; label: string } | null
	onSelect?: (value: { value: string; label: string }) => void
	className?: string
	classNameContent?: string
}
export const Select = ({
	items,
	placeholder,
	value,
	onSelect,
	className,
	classNameContent,
}: Props) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	return (
		<div className={clsx(styles.select, className)}>
			<p className={styles.title} onClick={() => setIsOpen((prev) => !prev)}>
				<span>{value?.label || placeholder}</span>
				{/* <ArrowImage
					className={clsx(styles.arrow, { [styles.arrow_rotate]: isOpen })}
				/> */}
			</p>

			<ul className={clsx(styles.content, classNameContent, isOpen && styles.open)}>
				{items?.map((item, index) => (
					<li
						key={index}
						onClick={() => {
							setIsOpen(false)

							onSelect ? onSelect(item) : undefined
						}}
					>
						{item.label}
					</li>
				))}
			</ul>

		</div>
	)
}
