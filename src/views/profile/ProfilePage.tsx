'use client'
import { Section } from '@/components/layout/Section/Section'
import clsx from 'clsx'
import { signOut, useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import { TbLogout } from 'react-icons/tb'
import { AccountManagePanel } from './AccountManagePanel/AccountManagePanel'
import styles from './Profile.module.scss'
import { FavoritesItemsSection } from './Sections/FavoritesItems/FavoritesItemsSection'
import { User } from '@/types/User.types'
import { Button } from '@/components/ui/button/Button'
import { AccountSettingsSection } from './Sections/AccountSettings/AccountSettingsSection'
import { OrderListSection } from './Sections/OrderList/OrderListSection'
import { AccountMessengerListSection } from './Sections/AccountMessengerListSection/AccountMessengerListSection'
import { AccountMessengerSection } from './Sections/AccountMessengerSection/AccountMessengerSection'
import { MyAdsSection } from './Sections/MyAdsSection/MyAdsSection'
import { BasketsItemsSection } from './Sections/BasketsItemsSection/BasketsItemsSection'
import { Order } from '@/types/Order.types'
import { orderGetByUser } from '@/actions/order/order.actions'
import { MessageDocument } from '@/types/messenger.types'
import { Product } from '@/types/Product.types'

export const ProfilePage = (
	{
		user,
		orderData,
		favoriteData,
		messengerData,
		productData,
		basketData
	}: {
		user: User,
		orderData: Order[],
		favoriteData: Order[],
		messengerData: MessageDocument[],
		productData: Product[],
		basketData: Order[],
	}
) => {
	const router = useRouter()
	const profileSections = useMemo(() => {
		return [
			{ name: 'order-list', value: 0, title: 'Список заказов' },
			{ name: 'favorites', value: 1, title: 'Избранное' },
			{ name: 'messenger-list', value: 2, title: 'Сообщения' },
			{ name: 'settings', value: 3, title: 'Настройки аккаунта' },
			{ name: 'advertisements', value: 4, title: 'Мои объявления' },
			{ name: 'basket', value: 5, title: 'Корзина' },
		]
	}, [])

	const path = usePathname()
	const nowProfileSection = path.split('/')[2]
	const [activePanelSettingNumber, setActivePanelSettingNumber] = useState(
		profileSections.find((section) => section.name === nowProfileSection)
			?.value || 0
	)

	const handleLogout = async () => {
		localStorage.removeItem('token')
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


	console.log('user in profile - ', user)

	const sections = useMemo(() => {
		return [
			<OrderListSection key={0} orderData={orderData} />,
			<FavoritesItemsSection key={1} favoriteData={favoriteData} />,
			<AccountMessengerListSection key={2} userData={user} messengerData={messengerData} setActivePanel={setActivePanelSettingNumber} />,
			<AccountSettingsSection key={3} userData={user} />,
			<MyAdsSection key={4} productData={productData} />,
			<BasketsItemsSection key={5} basketData={basketData} />,
		]
	}, [orderData])

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
