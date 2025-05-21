import GlobalLoaderStore from '@/stores/global-loader/GlobalLoaderStore'
import clsx from 'clsx'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import styles from './GlobalLoader.module.scss'

export const GlobalLoader = observer(() => {
	const { isLoading } = GlobalLoaderStore

	useEffect(() => {
		if (isLoading) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}

		return () => {
			document.body.style.overflow = ''
		}
	}, [isLoading])

	return (
		<div
			className={clsx(styles.openLoader, {
				[styles.close]: !isLoading,
			})}
		>
			<div className='flex flex-col items-center gap-[5px]'>
				<div className={clsx(styles.spinner)}>
					{/* <AiOutlineLoading3Quarters size={42} color='white' /> */}
				</div>
				<h2 className='text-white'>
					Обработка действий, пожалуйста подождите...
				</h2>
			</div>
		</div>
	)
})
