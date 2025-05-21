'use client'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { Dispatch, SetStateAction } from 'react'
import { CgProfile } from 'react-icons/cg'
import { HiOutlineGift } from 'react-icons/hi'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { LiaStreetViewSolid } from 'react-icons/lia'
import { LuHeart } from 'react-icons/lu'
import { MdOutlineMessage } from 'react-icons/md'
import { VscSettingsGear } from 'react-icons/vsc'
import { MdDesignServices } from "react-icons/md";
import styles from './AccountManagePanel.module.scss'
import { PiBasket } from 'react-icons/pi'

interface AccountManagePanelProps {
	setActivePanel: Dispatch<SetStateAction<number>>
	activePanelSettingNumber: number
}

export const AccountManagePanel = ({
	setActivePanel,
	activePanelSettingNumber,
}: AccountManagePanelProps) => {
	const router = useRouter()
	return (
		<div className={styles.account_settings}>
			{panelSettingVariables.map((setting, i) => {
				if (setting.title) {
					return (
						<div
							onClick={() => {
								console.log(i)
								setActivePanel(i)
								router.push(`/profile/${setting.url}`)
							}}
							className={clsx(styles.setting_item, {
								[styles.selected]: activePanelSettingNumber === i,
							})}
							key={i}
						>
							<setting.image size={25} />
							<p>{setting.title}</p>
						</div>
					)
				}
			})}
		</div>
	)
}

const panelSettingVariables = [
	{ title: 'Заказы', image: VscSettingsGear, url: 'order-list' },
	// { title: 'Бонусы', image: HiOutlineGift, url: 'bonuses' },
	{ title: 'Избранное', image: LuHeart, url: 'favorites' },
	{ title: 'Сообщения', image: MdOutlineMessage, url: 'messenger-list' },
	// { title: 'Мои адреса', image: LiaStreetViewSolid, url: 'my-address' },
	// {
	// 	title: 'Настройка уведомлений',
	// 	image: IoIosNotificationsOutline,
	// 	url: 'notification',
	// },
	{ title: 'Настройка аккаунта', image: CgProfile, url: 'settings' },
	{ title: 'Мои объявления', image: MdDesignServices, url: 'advertisements' },
	{ title: 'Корзина', image: PiBasket, url: 'basket' },
	// { title: '', image: '', url: 'messenger' },
]
