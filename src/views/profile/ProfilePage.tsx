'use client'
import { Section } from '@/components/layout/Section/Section'
import clsx from 'clsx'
import { signOut, useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import { TbLogout } from 'react-icons/tb'
import { AccountManagePanel } from './AccountManagePanel/AccountManagePanel'
import styles from './Profile.module.scss'
// import { AccountSettingsSection } from './Sections/AccountSettings/AccountSettingsSection'
import { FavoritesItemsSection } from './Sections/FavoritesItems/FavoritesItemsSection'
// import { OrderListSection } from './Sections/OrderList/OrderListSection'
import { User } from '@/types/User.types'
import { Button } from '@/components/ui/button/Button'
import { AccountSettingsSection } from './Sections/AccountSettings/AccountSettingsSection'
import { OrderListSection } from './Sections/OrderList/OrderListSection'
import { AccountMessengerListSection } from './Sections/AccountMessengerListSection/AccountMessengerListSection'
import { AccountMessengerSection } from './Sections/AccountMessengerSection/AccountMessengerSection'

export const ProfilePage = () => {
	const router = useRouter()
	const profileSections = useMemo(() => {
		return [
			{ name: 'order-list', value: 0, title: 'Список заказов' },
			// { name: 'bonuses', value: 1, title: 'Бонусы' },
			{ name: 'favorites', value: 1, title: 'Избранное' },
			{ name: 'messenger-list', value: 2, title: 'Сообщения' },
			// {
			// 	name: 'my-address',
			// 	value: 4,
			// 	title: 'Мои адреса доставки',
			// },
			// { name: 'notification', value: 5, title: 'Список уведомлений' },
			{ name: 'settings', value: 3, title: 'Настройки аккаунта' },
			{ name: 'advertisements', value: 4, title: 'Мои объявления' },
			{ name: 'messenger', value: 5, title: 'Сообщения' },
		]
	}, [])

	const path = usePathname()
	const nowProfileSection = path.split('/')[2]
	const [activePanelSettingNumber, setActivePanelSettingNumber] = useState(
		profileSections.find((section) => section.name === nowProfileSection)
			?.value || 0
	)
	const handleLogout = async () => {
		await signOut({
			callbackUrl: '/',
		})
	}

	useEffect(() => {
		profileSections.map((section) => {
			if (section.name === nowProfileSection) {
				setActivePanelSettingNumber(section.value)
			}
		})
	}, [nowProfileSection])

	const sections = useMemo(() => {
		return [
			<div key={0}>
				<OrderListSection />
			</div>,
			// <div key={2}>section 2</div>,
			<div key={1}>
				<FavoritesItemsSection />
			</div>,
			<AccountMessengerListSection key={2} setActivePanel={setActivePanelSettingNumber} />,

			// <div key={5}>section 5</div>,
			// <div key={6}>section 6</div>,
			<AccountSettingsSection key={3} />,
			<div key={4}>section 5</div>,
			<AccountMessengerSection key={5} />,
		]
	}, [])


	// useEffect(() => {
	// 	if (session.status !== 'authenticated' && session.status !== 'loading') {
	// 		router.push('/auth')
	// 	}
	// }, [session])

	return (
		<div className={styles.bg}>
			<Section>
				<div className={styles.container}>
					<header className={styles.header}>
						<h1>{profileSections[activePanelSettingNumber].title}</h1>
						<Button onClick={() => handleLogout()} className='w-fit'>
							Выйти
							<TbLogout size={20} />
						</Button>
					</header>
					<main className={styles.main}>
						<AccountManagePanel
							setActivePanel={setActivePanelSettingNumber}
							activePanelSettingNumber={activePanelSettingNumber}
						/>
						<div className={clsx(styles.section_data)}>
							{sections[activePanelSettingNumber]}
						</div>
					</main>
				</div>
			</Section>
		</div>
	)
}
