// 'use client'
// import { Button } from '@/components/ui/button/Button'
// import { ImageCustom } from '@/components/ui/ImageCustom'
// import { Input } from '@/components/ui/input/Input'
// import { useCallback, useEffect, useState } from 'react'
// import AvatarImage from '../../../../assets/standartAvatar/standartAvatar.png'
// import styles from './AccountSettingsSection.module.scss'
// import { userGet, userUpdate } from '@/actions/user/user.action'
// import { User } from '@/types/User.types'
// import { toast } from 'react-toastify'
// import { observer } from 'mobx-react-lite'
// import userStore from '@/stores/user/UserStore'
// import { AccountSettingsSkeleton } from '@/components/skeletons/AccountSettings/AccountSettingsSkeleton'

// export const AccountSettingsSection = observer(({ userData }: { userData: User }) => {
// 	const [user, setUser] = useState<User>()
// 	const [phoneNumber, setPhoneNumber] = useState('')
// 	const [username, setUsername] = useState('')
// 	const [email, setEmail] = useState('')
// 	const [city, setCity] = useState('')
// 	const [street, setStreet] = useState('')
// 	const [house, setHouse] = useState('')
// 	const [flat, setFlat] = useState('')
// 	const [zipCode, setZipCode] = useState('')

// 	useEffect(() => {
// 		const cityByLocalData = localStorage.getItem('selectCity');
// 		let cityByLocal = null;

// 		try {
// 			cityByLocal = cityByLocalData ? JSON.parse(cityByLocalData) : null;
// 		} catch (e) {
// 			localStorage.removeItem('selectCity');
// 		}

// 		setPhoneNumber(userData?.phone.toString() || '');
// 		setUsername(userData?.name || '');
// 		setEmail(userData?.email || '');
// 		setStreet(userData?.street || '');
// 		setCity(cityByLocal?.city || '');
// 		setHouse(userData?.house || '');
// 		setFlat(userData?.flat || '');
// 		setZipCode(userData?.zip_code || '');
// 		setUser(userData);


// 	}, []);

// 	const saveUserSettings = async () => {
// 		const data = {
// 			id: user?.id,
// 			email,
// 			phone: phoneNumber,
// 			name: username,
// 			street,
// 			house,
// 			flat,
// 			zip_code: zipCode
// 		};
// 		try {
// 			await userUpdate(data);
// 			toast.success('Данные успешно сохранены');
// 		} catch (error) {
// 			console.error('Failed to update user data:', error);
// 			toast.error('Ошибка при сохранении данных');
// 		}
// 	};

// 	const FormatDate = (date: Date) => {
// 		const day = String(date.getDate()).padStart(2, '0');
// 		const month = String(date.getMonth() + 1).padStart(2, '0');
// 		const year = date.getFullYear();

// 		return `${day}.${month}.${year}`;
// 	};

// 	return (
// 		<>
// 			<div className={styles.user_avatar_container}>
// 				<ImageCustom classNameImg={styles.avatar_image} src={AvatarImage} />
// 				{phoneNumber && userStore?.user?.email ? (
// 					<div>
// 						<p className={styles.username}>{userStore?.user?.email}</p>
// 						<p className={styles.date_registered}>Дата регистрации: {FormatDate(new Date(user?.createdAt || ''))}</p>
// 					</div>
// 				) : (
// 					<div>
// 						<div className={styles.usernameSkeleton}></div>
// 						<div className={styles.date_registered_skeleton}></div>
// 					</div>
// 				)}
// 			</div>

// 			{phoneNumber && userStore?.user?.email ? (
// 				<div className={styles.user_form_data}>
// 					<Input
// 						variant='form'
// 						label='Почта'
// 						value={userStore?.user?.email || email}
// 						onChange={(e) => setEmail(e.target.value)}
// 					/>
// 					<Input
// 						variant='form'
// 						label='Номер телефона'
// 						value={phoneNumber}
// 						onChange={(e) => setPhoneNumber(e.target.value)}
// 					/>
// 					<Input
// 						variant='form'
// 						label='ФИО'
// 						value={username}
// 						onChange={(e) => setUsername(e.target.value)}
// 					/>
// 					<Input
// 						variant='form'
// 						label='Город'
// 						value={city}
// 						onChange={(e) => setCity(e.target.value)}
// 					/>
// 					<Input
// 						variant='form'
// 						label='Улица'
// 						value={street}
// 						onChange={(e) => setStreet(e.target.value)}
// 					/>
// 					<Input
// 						variant='form'
// 						label='Дом'
// 						value={house}
// 						onChange={(e) => setHouse(e.target.value)}
// 					/>
// 					<Input
// 						variant='form'
// 						label='Квартира'
// 						value={flat}
// 						onChange={(e) => setFlat(e.target.value)}
// 					/>
// 					<Input
// 						variant='form'
// 						label='Индекс'
// 						value={zipCode}
// 						onChange={(e) => setZipCode(e.target.value)}
// 					/>
// 				</div>
// 			) : (
// 				<AccountSettingsSkeleton />
// 			)}
// 			<div className={styles.user_account_manager_container}>
// 				<Button onClick={saveUserSettings} variant='small'>Сохранить</Button>
// 			</div>
// 		</>
// 	)
// });
