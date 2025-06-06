'use client'

import { Crumbs } from "@/components/crumbs/Crumbs"
import { Slider } from "@/components/slider/Slider"
import { ImageCustom } from "@/components/ui/ImageCustom"
import { Fullscreen, Minus, Plus } from "lucide-react"
import HeartBorderGray from '@/assets/images/heart_border_black.png'
import HeartRed from '@/assets/images/heartRed3.png'
import { toast } from "react-toastify"
import styles from './DetailProductPage.module.scss'
import { Button } from "@/components/ui/button/Button"
import { Section } from "@/components/layout/Section/Section"
import { ITEM_DATA } from "@/components/dataTime/dataTime"
import { useEffect, useMemo, useState } from "react"
import { formatCurrencyRub } from "@/utils/formatCurrencyRub"
import clsx from "clsx"
import { removeTags } from "@/utils/removeTags"
import { ImageFullScreenInfoModal } from "@/components/modals/ImageFullScreenInfoModal/ImageFullScreenInfoModal"
import Star from '@/assets/images/star.png'
import AvatarInDetali from '@/assets/images/avatarInDetali.png'
// import userStore from "@/stores/user/UserStores"
import { orderCreate } from "@/actions/order/order.actions"
import { Product } from "@/types/Product.types"
import { Order, OrderItem } from "@/types/Order.types"
import { messengerCreate, messengerGetByUser } from "@/actions/messenger/messenger.action"
import { MessageDocument } from "@/types/messenger.types"
import { useRouter } from "next/navigation"
import { basketCreate, basketGetByUser, basketGetByUserAndItemId } from "@/actions/basket/basket.action"
import { observer } from "mobx-react-lite"
import { User } from "@/types/User.types"

export const DetailProductPage = observer(({ item, basketData, userData, favoritesData }: { item: Product, basketData: Order[], userData: User, favoritesData: Order[] }) => {
	const [fullScreenImage, setFullScreenImage] = useState(false)
	const [isUnauthorization, setIsUnauthorization] = useState(false)
	const [selectImageIndex, setSelectImageIndex] = useState(0)
	// const [basket, setBasket] = useState([])
	const [countBoolen, setCountBoolen] = useState(false)
	const [statSpec, setStatSpec] = useState<boolean>(false)
	const [statDescription, setStatusDescription] = useState<boolean>(true)
	const [favorite, setFavorite] = useState([])
	const [dateTime, setDateTime] = useState<number>()
	const [ordersFinish, setOrdersFinish] = useState<Order[]>()
	const [thisOrderCreate, setThisOrderCreate] = useState<boolean>(false)
	const [messengerData, setMessengerData] = useState<MessageDocument[]>()
	const [group, setGroup] = useState<MessageDocument[]>()
	const [handleFilterOrderUse, setHandleFilterOrderUse] = useState<boolean>(false)

	const router = useRouter()

	// const [basketData, setBasketData] = useState<Order[]>()
	// const getProduct = () => {
	// 	if (userData?.user?.email) {
	// 		console.log('userStore?.user?.email - ', userData?.user?.email);
	// 		basketGetByUserAndItemId(userData?.user?.email, item._id)
	// 			.then(res => {
	// 				console.log('res - ', res);
	// 				setBasketData(res?.result);
	// 			})
	// 			.catch(error => {
	// 				console.error('Ошибка при получении данных:', error);
	// 			});
	// 	}
	// };
	// useEffect(() => {

	// 	getProduct()

	// }, [userData?.user?.email])

	const [userName, setUserName] = useState<string | null | undefined>('')
	useEffect(() => {
		setUserName(userData?.user?.email);
	}, [userData?.user?.name]);

	const getMessenger = () => {
		console.log('начало работы')
		if (userData?.user?.email) {
			console.log('userStore?.user?.email - ', userData?.user?.email);
			messengerGetByUser(userData?.user?._id)
				.then(res => {
					console.log('res - ', res);
					setMessengerData(res?.result);
				})
				.catch(error => {
					console.error('Ошибка при получении данных:', error);
				});
		}
	};
	useEffect(() => {
		getMessenger()
	}, [userName])

	useEffect(() => {
		setGroup(messengerData?.filter((elem) => elem.item._id === item._id))
	}, [messengerData])

	// useEffect(() => {
	// 	setHandleFilterOrderUse(handleFilterOrder)
	// }, [messengerData])

	const messageTry = () => {
		const result = messengerData?.some((elem: MessageDocument) => elem.item._id === item._id)
		return result
	}
	// console.log('orders - ', orders)
	// const [itemIsBaked, setItemIsBasked] = useState<ProductInBasket | null>(null)
	// const [countItem, setCountItem] = useState(0)

	// useEffect(() => {
	// 	const fetchItemInBasket = async () => {
	// 		const res = await basketGetOne(item.id)

	// 		setItemIsBasked(res.result)
	// 	}
	// 	fetchItemInBasket()
	// }, [item.id])

	// useEffect(() => {
	// 	if (itemIsBaked) {
	// 		setCountItem(itemIsBaked.count)
	// 	}
	// }, [itemIsBaked])
	// const { data: itemIsBaked, mutate } = useSWR(
	// 	`${process.env.NEXT_PUBLIC_API_URL}/basket/${item.id}`,
	// 	fetcher,
	// 	{
	// 		keepPreviousData: true,
	// 	}
	// )
	console.log('basketData - ', basketData)

	// const checkProductIsOrder = () => {
	// 	orders.
	// } 
	// const handleFilterOrder = () => {
	// 	const oredrsFilter = basketData?.filter((elem: any) => elem.item._id === item._id);
	// 	console.log('oredrsFilter - ', oredrsFilter)
	// 	if (oredrsFilter ? oredrsFilter[0]?.item._id === item._id : false) {
	// 		return true
	// 	} else {
	// 		return false
	// 	}

	// }

	// useEffect(() => {
	// 	handleFilterOrder()
	// }, [userStore?.user])

	console.log('thisOrderCreate - ', thisOrderCreate)

	const getBarnaulTime = () => {
		return new Intl.DateTimeFormat('ru-RU', {
			timeZone: 'Asia/Barnaul',
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
		}).format(new Date())
	}

	const HandleBasketAdd = (item: Product) => {
		const dataOrder = {
			item: item,
			customer: userData?.user,
			data: getBarnaulTime()
		}
		const result = basketCreate(dataOrder)
		console.log('result - ', result)
	}

	const HandleMessengerCreate = async (item: Product) => {

		const dataOrder = {
			item: item,
			customer: userData?.user,
			message: [],
			data: getBarnaulTime()
		};

		try {
			const result = await messengerCreate(dataOrder);
			console.log('result - s -', result);

			if (result?.response === "true") {
				router.replace(`/messenger/${result?.body?.insertedId}`);
			} else {
				console.error('Ошибка: неожиданный статус ответа', result?.status);
			}
		} catch (error) {
			console.error('Ошибка при создании мессенджера:', error);
		}
	};

	const calculateDate = (
		amount: number,
		city: string,
		delivery?: boolean
	): string => {
		let dateToDelevery = 0
		if (city === 'Барнаул') {
			dateToDelevery = 5
			if (delivery) {
				dateToDelevery = 7
			}
		} else {
			if (amount > 0) {
				dateToDelevery = 7
			} else {
				dateToDelevery = 11
			}
		}

		const barnaulTime = getBarnaulTime()
		const [datePart, timePart] = barnaulTime.split(', ')
		const [hours, minutes] = timePart.split(':')
		const resultTime = Number(hours + minutes)
		if (resultTime > 1200) {
			dateToDelevery += 1
		}

		const [day, month, year] = datePart.split('.').reverse()
		const currentDate = new Date(`${day} -${month} -${year} `)

		currentDate.setDate(currentDate.getDate() + dateToDelevery)
		const options: Intl.DateTimeFormatOptions = {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
		}
		const resultDate = new Intl.DateTimeFormat('ru-RU', options).format(
			currentDate
		)

		return resultDate
	}

	const itemImages = useMemo(() => {
		return (
			<Slider
				settings={{ slidesPerView: 1, spaceBetween: 20 }}
				arrowNext={false}
				arrowPrev={false}
				items={[
					...item.images.map((img: any, i: number) => (
						<div className={styles.container} key={i}>
							<Fullscreen
								onClick={() => {
									setFullScreenImage(true)
									setSelectImageIndex(i)
									document.body.style.paddingRight = '8px'
									document.body.style.overflowY = 'hidden'
								}}
								className={styles.fullscreen}
							/>
							<img
								key={i}
								onClick={() => {
									setFullScreenImage(true)
									setSelectImageIndex(i)
									document.body.style.paddingRight = '8px'
									document.body.style.overflowY = 'hidden'
								}}
								className={styles.images}
								src={img.image}
								alt='img'
							/>
							{/* <div
									className='absolute bg-[#e31837] top-[40px] right-[0px] 
							text-white text-center pl-[5px] pr-[5px] rounded-[5px]'
								>
									-{countSale(item.price)[1]}%
								</div> */}
						</div>
					)),
				]}
				pagination
				customPagination={[
					...item.images.map((img: any, i: number) => (
						<img
							key={i}
							className='border-[2px] cursor-pointer w-[115px] h-[90px] active:scale-[0.95]
			 			 duration-300 ease-in-out'
							src={img.image}
							alt='img'
						/>
					)),
				]}
			/>
		)
	}, [])

	// function removeTags(text: string) {
	// 	return <div dangerouslySetInnerHTML={{ __html: text }}></div>
	// }

	// const renderAttributes = (data: any) => {
	// 	const attributeType = data.type
	// 	let attributeContent = undefined
	// 	switch (attributeType) {
	// 		case 1:
	// 			const filteredValues = data.ItemAttributesEntity.values.filter((valueItem: any) =>
	// 				data.meanings.some((meaning: any) => meaning.id === valueItem.meaning_id)
	// 			);

	// 			attributeContent = filteredValues.map((valueItem: any) => {
	// 				const correspondingMeaning = data.meanings.find((meaning: any) => meaning.id === valueItem.meaning_id);
	// 				return (
	// 					< >
	// 						<b>{valueItem.value} </b>
	// 						<b>{correspondingMeaning ? correspondingMeaning.name : ''}</b>
	// 						<br />
	// 					</>
	// 				);
	// 			});

	// 			return attributeContent
	// 		case 4:
	// 			let meaning_id = data.ItemAttributesEntity.values?.map((elem: any) => {
	// 				return elem
	// 			})
	// 			let meaning_id_label = meaning_id[0]?.meaning_id || meaning_id[0]?.value
	// 			attributeContent = <b>{meaning_id_label?.label || meaning_id_label} </b>
	// 			return attributeContent
	// 		default:
	// 			attributeContent = (
	// 				<>
	// 					<b>{data.ItemAttributesEntity?.values[0]?.value} </b>
	// 					<b>{data.meanings[0]?.name}</b>
	// 				</>
	// 			)
	// 	}
	// 	return attributeContent
	// }

	const statusSpec = () => {
		setStatSpec(true)
		setStatusDescription(false)
	}
	const statusDescription = () => {
		setStatusDescription(true)
		setStatSpec(false)
	}
	// console.log('itemIsBaked - ', itemIsBaked)
	return (
		<Section>
			<div className={styles.detail_page}>
				<div className='container'>
					{/* CRUMBS  */}
					<div className={styles.crumbs}>
						<Crumbs
							span={'Блог'}
						/>
					</div>
					<div className={styles.main}>
						{/* SLIDER PHOTO PRODUCT  */}
						<div className={styles.images}>{itemImages}</div>
						<div className={styles.info}>
							<h2 className={styles.name}>{item.title}</h2>
							<div className={styles.buy_statictic}>
								<div className={styles.sales_count}>
									<div className={styles.rating}>
										{[...Array(item.user.rating)].map((_, index) => (
											<ImageCustom key={index} src={Star} classNameImg={styles.img} />
										))}
									</div>
									Обратились более
									<span className='mx-[5px] font-semibold'>
										{' '}<b>{Math.round((item.user.rating) / 2.4)}</b>{' '}
									</span>
									раз
								</div>
							</div>
							<div className={styles.prices}>
								<div>
									<span className={styles.discount_price}>
										от {formatCurrencyRub(Number(item.price))}
									</span>
									{/* <s className={styles.price}>{countSale(item.price)[0]}</s> */}
								</div>

								{/* {item.amount > 0 && (<p className={styles.text_red}>Осталось {item.amount} шт</p>)} */}
								{/* <div className={styles.discount_question}>
									<DiscountImage />
									<span>Нашли дешевле? Снизим цену!</span>
								</div> */}
							</div>
							{/* <div className={styles.credit}>
								<span>
									В кредит от <b className='text-black'>нет данных</b> руб. в
									месяц
								</span>
							</div> */}
							{/* <div className={styles.colors_available}>
								<p>Выберите цвет</p>
								 ТЕСТОВЫЙ МАССИВ ДЛЯ НАГЛЯДНОГО ОТОБРАЖЕНИЯ  
								<div className={styles.list}>{itemAvailableColors}</div>
							</div> */}
							<div className={styles.options}>
								<div className={styles.button_container}>
									{basketData?.some((basket) => basket.item._id === item._id) ? (
										<Button
											onClick={() => router.push('/profile/basket')}
											className={styles.recycle_button}
											variant="muted"
										>
											Перейти в корзину
										</Button>
									) : (
										<Button
											onClick={() => HandleBasketAdd(item)}
											className={styles.recycle_button}
										>
											В корзину
										</Button>
									)}
									{messengerData?.some((elem: MessageDocument) => elem.item._id === item._id) ? (
										<Button
											onClick={() => router.replace(`/ messenger / ${group ? group[0]._id : ''} `)}
											className={styles.recycle_button}
											variant="muted"
										>
											Перейти к диалогу
										</Button>
									) : (
										<Button
											onClick={() => HandleMessengerCreate(item)}
											className={styles.recycle_button}
										>
											Написать
										</Button>
									)}
									{favoritesData ? (
										<Button
											// onClick={() =>
											// 	// deleteDataInFavorite({
											// 	// 	id: item.id,
											// 	// 	count: 1,
											// 	// 	name: item.name,
											// 	// 	slug: item.slug,
											// 	// 	price: item.price,
											// 	// 	description: item.description,
											// 	// 	images: item.images[0].path,
											// 	// })
											// }
											variant='inFavorite'
											className={styles.favorite}
										>
											<ImageCustom
												className='w-[25px] h-[25px]'
												src={HeartRed}
											/>
										</Button>
									) : (
										<Button
											// onClick={() =>
											// addDataInFavorite({
											// 	id: item.id,
											// 	count: 1,
											// 	name: item.name,
											// 	slug: item.slug,
											// 	price: item.price,
											// 	description: item.description,
											// 	images: item.images[0].path,
											// 	amount: item.amount,
											// 	show_if_no_count: item.settings.show_if_no_count
											// })
											// }
											className={styles.favorite}
											variant='noFavoriteCards'
										>
											<ImageCustom
												className='w-[25px] h-[25px]'
												src={HeartBorderGray}
											/>
										</Button>
									)}
									{/* <Button
										onClick={() => toast.error(`Функция не готова...`)}
										variant='muted'
									>
										Купить в один клик
									</Button> */}
								</div>
								{/* <Button
									onClick={() => toast.error(`Функция не готова...`)}
									variant='credit'
								>
									Купить в рассрочку
								</Button> */}
							</div>
							<div></div>
							{/* <div className={styles.delivery_methods}>
								<h5>Способы доставки</h5>
								{item.deliveryMethods.map((method, index) => (
									<p key={index} className={styles.method}>
										{method}
									</p>
								))}
								<p className={styles.method}>нет данных</p>
								<p className={styles.delivery_distribution}>
									Доставка по России во все города
								</p>
							</div> */}

							<div className={styles.contacts}>
								<div className={styles.text_container}>
									<p className={styles.name}>{item?.user?.name}</p>
									<div className={styles.rating}>
										<p>{item?.user?.rating}.0</p>
										<div className={styles.stars_container}>
											{[...Array(item?.user?.rating)].map((_, index) => (
												<ImageCustom key={index} src={Star} classNameImg={styles.img} />
											))}
										</div>
										<span> {item?.user?.reviews} отзывов</span>
									</div>
									<p className={styles.data_create}>На площадке c мая 2025</p>
									<div className={styles.count_products_container}>
										1 объявление пользователя
									</div>
								</div>
								<ImageCustom src={AvatarInDetali} classNameImg={styles.img} />
							</div>
						</div>
					</div>
					<div className={styles.info_button}>

						<button onClick={statusDescription}>Описание</button>

					</div>
					{/* SPECS  */}

					{/* DESCRIPTION  */}
					{statDescription && (
						<>
							{/* <h2>Описание</h2> */}
							{removeTags(item.description)}
						</>
					)}
					{/* THE SCOPE OF DELIVERY  */}
					{/* <div>
						<Image
							src={'/image/scope-delivery.png'}
							width={873}
							height={1000}
							alt='scope-delivery'
						/>
					</div> */}
					{/* SIMILAR PRODUCTS  */}
					{/* <section>
 					<h2>Похожие товары</h2>
 					<ProductsList items={products} />
 					<ProductsList items={products} />
 				</section> */}
				</div>
				{/*  MODALS */}
				<ImageFullScreenInfoModal
					isShow={fullScreenImage}
					setIsShow={setFullScreenImage}
					item={item}
					selectImageIndex={selectImageIndex}
				/>

			</div>
		</Section >
	)
})
