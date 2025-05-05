'use client'
import { useClickAway } from '@uidotdev/usehooks'
import clsx from 'clsx'
import { X } from 'lucide-react'
import {
	Dispatch,
	HTMLAttributes,
	LegacyRef,
	ReactNode,
	SetStateAction,
	useEffect,
} from 'react'
import { IoChevronBackOutline } from 'react-icons/io5'
import styles from './Modal.module.scss'

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode
	isShow: boolean
	setIsShow: Dispatch<SetStateAction<boolean>>
	noPadding?: boolean
	navigate?: 'default' | 'breadcrumb' | 'off' | 'defaultTop'
	breadcrumbTitle?: string
	position?: 'center' | 'left' | 'right' | 'right-bottom' | 'bottom'
	navigateBackground?: string
	overlayOff?: boolean
	onClose?: () => void
}

export const Modal = ({
	children,
	isShow,
	setIsShow,
	noPadding,
	navigate = 'default',
	navigateBackground = 'white',
	breadcrumbTitle,
	position = 'center',
	overlayOff,
	onClose,
	...props
}: ModalProps) => {
	const ref = useClickAway(() => {
		if (isShow) {
			setTimeout(() => {
				onClose ? onClose() : undefined
			}, 400)
			setIsShow(false)
		}
	})

	useEffect(() => {
		if (!noPadding) {
			if (isShow) {
				document.body.style.paddingRight = '8px'
				document.body.style.overflow = 'hidden'
			} else {
				setTimeout(() => {
					document.body.style.paddingRight = ''
					document.body.style.overflowY = ''
				}, 350)
			}
		}
	}, [isShow, noPadding])

	const getPositionStyle = (
		position: 'left' | 'right' | 'center' | 'default' | 'right-bottom' | 'bottom'
	): { alignItems?: string; justifyContent?: string, bottom?: string } => {
		switch (position) {
			case 'left':
				return { alignItems: 'start', justifyContent: 'start' }
			case 'right':
				return { alignItems: 'start', justifyContent: 'end' }
			case 'center':
				return { alignItems: 'center', justifyContent: 'center' }
			case 'right-bottom':
				return { alignItems: 'end', justifyContent: 'end' }
			case 'bottom':
				return { alignItems: 'end', justifyContent: 'center' }
			default:
				return { alignItems: 'center', justifyContent: 'center' }
		}
	}

	return (
		<div className={props.className}>
			<div
				className={clsx(styles.container, {
					[styles.close]: !isShow,
				})}
				style={{ ...getPositionStyle(position), ...props.style }}
			>
				{/* OVERLAY  */}
				{!overlayOff && (<div className={styles.overlay}></div>)}
				{/* MODAL WINDOW  */}
				<div
					ref={ref as LegacyRef<HTMLDivElement> | undefined}
					className={clsx(styles.body, {
						[styles.close_body]: !isShow && position === 'center',
						[styles.close_body_right]: !isShow && position === 'right',
					})}
					style={{
						flexDirection: navigate === 'breadcrumb' ? 'column' : 'row',
					}}
				>
					{navigate === 'breadcrumb' && (
						<div
							className={styles.close_button_container}
							style={{
								paddingTop: 10,
								paddingBottom: 20,
								width: '100%',
								backgroundColor: navigateBackground
									? navigateBackground
									: 'white',
							}}
						>
							<IoChevronBackOutline
								className={styles.breadcrumb_close_button}
								onClick={() => {
									setTimeout(() => {
										onClose ? onClose() : undefined
									}, 400)
									setIsShow(false)
								}}
								color='black'
								size={30}
							/>
							{breadcrumbTitle && (
								<span className={styles.breadcrumb_title}>
									{breadcrumbTitle}
								</span>
							)}
						</div>
					)}
					{children}
					{navigate === 'default' && (
						<div
							onClick={() => {
								setTimeout(() => {
									onClose ? onClose() : undefined
								}, 400)
								setIsShow(false)
							}}
							className={styles.close_button_container}
						>
							<X color='white' size={50} />
						</div>
					)}
					{navigate === 'off' && (
						null
					)}
					{navigate === 'defaultTop' && (
						<div
							onClick={() => {
								setTimeout(() => {
									onClose ? onClose() : undefined
								}, 400)
								setIsShow(false)
							}}
							className={styles.close_button_top_container}
						>
							<X color='white' size={50} />
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
