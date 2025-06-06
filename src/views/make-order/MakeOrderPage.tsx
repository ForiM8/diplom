'use client'
// import { basketGet } from '@/actions/basket/basket.action'
// import { OrderCreate } from '@/actions/orders/orders.action'
import { Section } from '@/components/layout/Section/Section'
// import { PaymentNotificationModal } from '@/components/modals/payment-notification-modal/PaymentNotificationModal'
// import { SelectAddressForOrderModal } from '@/components/modals/select-address-for-order-modal/SelectAddressForOrderModal'
// import { ProductListMakeOrder } from '@/components/products/product-list-make-order/ProductListMakeOrder'
// import { Button } from '@/components/ui/button/Button'
// import { ProductInBasket, ProductInResult } from '@/types/Product.types'
import { formatCurrencyRub } from '@/utils/formatCurrencyRub'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { ChangeEvent, KeyboardEvent, useEffect, useMemo, useState } from 'react'
import IOMoneyPay from '../../assets/svg/iomoney.svg'
import MirPay from '../../assets/svg/mir.svg'
import BonusProgram from '../../assets/svg/bonus-program.svg'
import SberPay from '../../assets/svg/sber_pay.svg'
import SBPPay from '../../assets/svg/sbp.svg'
import styles from './MakeOrderPage.module.scss'
import { SwiperOptions } from 'swiper/types'
import { LiaStreetViewSolid } from 'react-icons/lia'
import { FaRegClock } from "react-icons/fa6";
import { Input } from '@/components/ui/input/Input'
import { Button } from '@/components/ui/button/Button'
import { ImageCustom } from '@/components/ui/ImageCustom'
import { basketClear, basketGetByUser } from '@/actions/basket/basket.action'
import { observer } from 'mobx-react-lite'
import { toast } from 'react-toastify'
// import { userGet, userUpdate } from '@/actions/user/user.action'
// import { MdOutlineLocationOn } from 'react-icons/md'
// import { useCalculateDateToDelivery } from '@/components/hooks/calculate-date-to-delivery/use-calculate-date-to-delivery'
// import { Select } from '@/components/ui/select/Select'
// import { toast } from 'react-toastify'
import GlobalLoaderStore from '@/stores/global-loader/GlobalLoaderStore'
import { userUpdate } from '@/actions/user/user.actions'
import { orderCreate } from '@/actions/order/order.actions'
import { Order } from '@/types/Order.types'
import { User } from '@/types/User.types'
// 
interface IFormInput {
	tel: string;
	email: string;
	name: string;
}

const initialFromState = {
	city_id: NaN,
	street: '',
	delivery_method: NaN,
	payment_method: NaN,
	zip_code: NaN,
	items: [
		{
			id: NaN,
			count: NaN
		}
	]
}

export type City = {
	country_id: number
	createdAt: string
	id: number
	name: string
	region_id: number
	updatedAt: string
}

export const MakeOrderPage = observer(({ userData }: { userData: User }) => {
	const [valuePaymentTypes, setValuePaymentTypes] = useState<string>()
	// const maxAmount = basketDataServ.reduce((max, current) => {
	// 	return current.item.amount > max ? current.item.amount : max;
	// }, 0);
	// const minAmount = basketDataServ.reduce((min, current) => {
	// 	return current.item.amount < min ? current.item.amount : min;
	// }, Infinity);
	const router = useRouter()
	const [username, setUsername] = useState<string | null | undefined>('')
	const [email, setEmail] = useState<string | null | undefined>('')
	const [city, setCity] = useState('')

	const [dateTime, setDateTime] = useState<number>()
	const [error, setError] = useState('');
	const [isShowPaymentNotificationModal, setIsShowPaymentNotificationModal] =
		useState(false)
	const [isShowSelectAddressModal, setIsShowSelectAddressModal] =
		useState(false)
	const [paymentTypeIsSelect, setPaymentTypeIsSelect] = useState<null | number>(
		null
	)
	// const [deliveryByCourier, setDeliveryByCourier] = useState<boolean>(false)
	// const [deliveryMethodIsSelect, setDeliveryMethodIsSelect] = useState(DeliveryMethodEnumEn.shipping)
	const [basketData, setBasketData] = useState<any[]>()
	const getProduct = () => {
		if (userData?.user?.email) {
			console.log('userStore?.user?.email - ', userData?.user?.email);
			basketGetByUser(userData?.user?.email)
				.then(res => {
					console.log('res - ', res);
					setBasketData(res?.result);
				})
				.catch(error => {
					console.error('Ошибка при получении данных:', error);
				});
		}
	};
	useEffect(() => {

		getProduct()

	}, [userData?.user?.email])
	// // const [basketData, setBasketData] = useState<ProductInResult[] | []>(basketDataServ)
	// // const [isLoading, setIsLoading] = useState(true)
	// const { isLoading, toggleLoader } = GlobalLoaderStore
	// const [userFromData, setUserFromData] = useState<Partial<FormData>>({})
	const totalPrice = useMemo(() => {
		let total = 0
		basketData?.forEach((item) => {
			total += Number(item.item.price)
		})

		return total
	}, [basketData])
	const fromData = {
		...initialFromState,
	}
	const [phone, setPhone] = useState<string | null | undefined>('');
	// const {
	// 	register,
	// 	handleSubmit,
	// 	formState: { errors },
	// 	watch,
	// 	setValue
	// } = useForm<IFormInput>()

	useEffect(() => {
		const barnaulTime = getBarnaulTime();
		const [, timePart] = barnaulTime.split(', ');
		const [hours, minutes] = timePart.split(':');
		let result = hours + minutes;
		setDateTime(Number(result));
	}, [])

	const getBarnaulTime = () => {
		return new Intl.DateTimeFormat('ru-RU', {
			timeZone: 'Asia/Barnaul',
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit'
		}).format(new Date());
	};

	// // const getUser = async () => {
	// // 	try {
	// // 		const res = userDataServ;
	// // 		setIsLoading(false)
	// // 		return res.result;
	// // 	} catch (error) {
	// // 		console.error('Error fetching user data:', error);
	// // 		throw error;
	// // 	}
	// // };
	// console.log('userDataServ - ', userDataServ)
	// useEffect(() => {


	// 	// const cityByLocalData = localStorage.getItem('selectCity') || '';

	// 	// let cityByLocal = null;

	// 	// try {
	// 	// 	cityByLocal = cityByLocalData ? JSON.parse(cityByLocalData) : null;


	// 	// } catch (e) {
	// 	// 	localStorage.removeItem('selectCity');
	// 	// }

	// const fetchUser = async () => {
	// 	try {
	// 		// toggleLoader()


	// 		// toggleLoader()
	// 	} catch (error) {
	// 		console.error('Failed to set user data:', error);
	// 	}
	// };
	useEffect(() => {
		setPhone(userData?.user?.phone || '');
		setUsername(userData?.user?.name || '');
		setEmail(userData?.user?.email || '');
		setCity(userData?.user?.city || '');
	}, [userData?.user]);



	const paymentSliderOptions: SwiperOptions = {
		slidesPerView: 2.7,
		spaceBetween: 20,
	}
	const saveUserSettings = async () => {
		const data = {
			id: userData?.user?._id,
			email: email,
			phone: phone,
			name: username,
			city: city,
			password: userData?.user?.password
		};

		await userUpdate(data);
	};

	const handleSubmitRequestForPayment = async () => {
		// setIsLoading(true);
		// toggleLoader()
		const usersData = {
			id: userData?.user?._id,
			email: email,
			phone: phone,
			name: username,
			city: city,
			password: userData?.user?.password
		};
		const order = {
			customer: usersData,
			item: basketData,
			status: 1,
			paymentTypes: valuePaymentTypes,
			data: getBarnaulTime()
		};


		if (basketData?.length === 0) {
			toast.error('Корзина пуста!');
			// toggleLoader()
			return;
		}

		if (!phone) {
			toast.error('Номер телефона не заполнен!');
			// toggleLoader()
			return;
		}

		if (!email) {
			toast.error('Не указан почтовый ящик!');
			// toggleLoader()
			return;
		}

		if (!username) {
			toast.error('ФИО не указан!');
			// toggleLoader()
			return;
		}

		if (!valuePaymentTypes) {
			toast.error('Метод оплаты не выбран')
			return;
		}

		await saveUserSettings();
		const result = await orderCreate(order);
		await basketClear()
		console.log('order - ', order);
		console.log('resultCreate - ', result);

		router.replace(`/profile/order-list?_fromOrderCreate`);
	};


	// useEffect(() => {
	// 	if (!basketData?.length && !isLoading) {
	// 		router.push('/')
	// 	}
	// }, [basketData])

	const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
		let value = e.target.value;

		value = value.replace(/[^0-9+()-]/g, '');
		if (value.length > 16) value = value.slice(0, 16);
		if (value.length < 3 || value === '') {
			value = '+7(';
		}
		if (value.length === 6) {
			value = value + ')';
		}
		if (value.length === 10) {
			value = value + '-';
		}
		if (value.length === 13) {
			value = value + '-';
		}

		setPhone(value);
	};

	// const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
	// 	if (e.key === 'Backspace') {
	// 		setPhone((prev) => {
	// 			let newValue = prev;
	// 			if (['+', '(', ')', '-'].includes(prev.charAt(prev.length - 1))) {
	// 				newValue = prev.slice(0, -1);
	// 			}
	// 			return newValue;
	// 		});
	// 	}
	// };


	// const handleSelectChange = (id: number) => {
	// 	setCity({
	// 		city_id: id,
	// 		city: cityItem?.find((elem) => elem.id === id)?.name
	// 	})
	// };
	return (
		<Section>
			<div className={styles.container}>

				<h1>Оформление заказа</h1>
				<div className={styles.content}>
					{/* ORDER INFO  */}
					<div className={styles.order_info_container}>

						<div>
							{/* PAYMENT TYPE  */}
							<h2>Покупатель</h2>
							<div
								className={clsx([
									styles.container_item,
									styles.padding_x,
									styles.user_type_container,
								])}
							>


								<div className={clsx(styles.user_container)}>
									<div className={clsx(styles.input_container)}>
										<Input
											value={username || ''}
											variant='form'
											label='ФИО'
											placeholder='Иванов Иван Иванович'
											onChange={(e) => setUsername(e.target.value)}
										/>
										{/* <p className={styles.errors_message}>
											<ErrorMessage errors={errors} name='name' />
										</p> */}
									</div>
									<div className={styles.input_container}>
										<Input
											value={email || ''}
											type='email'
											variant='form'
											label='Почта'
											placeholder='example@yandex.ru'
											onChange={(e) => setEmail(e.target.value)}
										/>
										{/* <p className={styles.errors_message}>
											<ErrorMessage errors={errors} name='email' />
										</p> */}
									</div>
									<div className={clsx(styles.input_container)}>
										<Input
											variant='form'
											type="text"
											value={phone || ''}
											label='Номер телефона'
											onChange={(e) => setPhone(e.target.value)}
											// onKeyDown={handleKeyDown}
											placeholder="+7 (---) --- -- --"
										/>
										{/* <p className={styles.errors_message}>
											<ErrorMessage errors={errors} name='name' />
										</p> */}
									</div>
								</div>

							</div>


						</div>
						<div>
							{/* PAYMENT TYPE  */}
							<h2>Способ оплаты</h2>
							<div
								className={clsx([
									styles.container_item,
									styles.padding_x,
									styles.user_type_container,
								])}
							>


								<div className={clsx(styles.user_container)}>
									<div className={clsx(styles.payment_container)}>
										{paymentTypes.map((elem, i) => {
											return (
												<div className={clsx(`${valuePaymentTypes !== elem.title ? styles.block : styles.block_active}`)} key={i} onClick={() => setValuePaymentTypes(elem.title)}>
													<ImageCustom
														src={elem.img}
														className={styles.img}

													/>
												</div>
											)
										})}

									</div>
								</div>

							</div>

						</div>
						{/* {deliveryMethodIsSelect === DeliveryMethodEnumEn.pickup && (<div> */}
						{/* PAYMENT TYPE  */}
						{/* <div
								className={clsx([
									styles.container_item,
									styles.padding_x,
									styles.payment_type_container,
								])}
							>
								<h2>Оплата</h2>
								<p>При получении</p>
							</div>
						</div>)} */}

						{/* DELIVERY SETTINGS   */}

						{/* ORDER ITEMS */}
						{/* <div>
							<ArrangeOrderList items={Array.from({ length: 1 })} />
						</div> */}

						{/* <ProductListMakeOrder basketData={basketData} /> */}
						<div
							className={clsx([
								styles.container_item,
								styles.padding_x,
								styles.user_type_container,
							])}
						>
							<h2>Приблизительная дата выполнения: 10 ноября</h2>

							<p className={styles.services}>{basketData?.length} услуги</p>

							<div className={clsx(styles.user_container)}>
								<div className={clsx(styles.basket_container)}>
									{basketData?.map((elem, i) => {
										return (
											<div className={clsx(styles.block)} key={i} onClick={() => router.replace(`/product/${elem.item._id}`)}>
												<img
													src={elem.item.images[0].image}
													className={styles.img}
												/>
												<p>{formatCurrencyRub(Number(elem.item.price))}</p>
											</div>
										)
									})}

								</div>
							</div>

						</div>
					</div>
					{/* PAYED  */}
					<div className={clsx([styles.payed_container])}>
						<div className={styles.container_item}>
							<div className={styles.padding_x}>
								<Button
									type="button"
									onClick={() => handleSubmitRequestForPayment()}
									className={styles.payed_button}
								>
									Оформить заказ
								</Button>
								<p className={styles.terms_agreement}>
									Нажимая кнопку «Оформить заказ», я даю свое
									<a href='/info/consent_to_the_processing_of_personal_data'> Согласие на сбор и обработку моих персональных данных </a>в соответствии с <a href='/info/personal_data_processing_policy'>Политикой обработки персональных данных </a>
									и принимаю <a href='/info/offer'>Условия публичной оферты</a>.
								</p>
							</div>
							<div className={styles.line_split}></div>
							{/* PRODUCT PRICE INFO */}
							<div className={styles.padding_x}>
								<div className={styles.items_count}>
									<h2>Список товаров</h2>
									<p>{basketData?.length || 0} товара(ов) </p>
								</div>
								{/* PRODUCT PRICE TOTAL SCORE  */}
								<div>

									<div
										className={clsx([
											styles.space_between,
											styles.item_price_item,
										])}
									>
										<p>Общая стоимость</p>

										<p >
											{formatCurrencyRub(totalPrice)}
										</p>
									</div>

								</div>
							</div>
							<div className={styles.line_split}></div>
							{/* TOTAL PRICE  */}
							<div className={clsx([styles.padding_x, styles.space_between])}>
								<p>Итого</p>
								<p>{formatCurrencyRub(totalPrice)}</p>
							</div>
						</div>
						{/* BONUS  */}
						{/* <div
							className={clsx([
								styles.container_item,
								styles.padding_x,
								styles.bonus_score,
							])}
						>
							<p>Начислим 139 бонусных рублей</p>
						</div> */}
						{/* PROMO CODE  */}
						{/* <Input
							variant='form-big'
							color='white'
							type='text'
							placeholder='Промокод'
						/> */}
					</div>
				</div>

			</div>
			{/* {isLoading && (
				<div className={styles.loading}>
					<div className={styles.loader}></div>
				</div>
			)} */}

			{/* <PaymentNotificationModal
				onClose={() => router.push('/profile/order-list')}
				isShow={isShowPaymentNotificationModal}
				setIsShow={setIsShowPaymentNotificationModal}
			/> */}
			{/* <SelectAddressForOrderModal
				onClose={() => {
					setIsShowPaymentNotificationModal(true)
					handleSubmitRequestForPayment()
				}}
				isShow={isShowSelectAddressModal}
				setIsShow={setIsShowSelectAddressModal}
				city={city}
				street={street}
				zipCode={zipCode}
				setCity={setCity}
				setStreet={setStreet}
				setZipCode={setZipCode}
			/> */}
		</Section >
	)
})

const paymentTypes = [

	{ title: 'Банковская карта', img: MirPay },
	{ title: 'ю мани', img: IOMoneyPay },
	{ title: 'Сбер', img: SberPay },
	{ title: 'СБП', img: SBPPay },
]