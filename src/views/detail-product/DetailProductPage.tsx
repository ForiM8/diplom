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
import { useMemo, useState } from "react"
import { formatCurrencyRub } from "@/utils/formatCurrencyRub"
import clsx from "clsx"
import { removeTags } from "@/utils/removeTags"
import { ImageFullScreenInfoModal } from "@/components/modals/ImageFullScreenInfoModal/ImageFullScreenInfoModal"
import Star from '@/assets/images/star.png'

export const DetailProductPage = () => {
	const item = ITEM_DATA
	const [fullScreenImage, setFullScreenImage] = useState(false)
	const [isUnauthorization, setIsUnauthorization] = useState(false)
	const [selectImageIndex, setSelectImageIndex] = useState(0)
	const [basket, setBasket] = useState([])
	const [countBoolen, setCountBoolen] = useState(false)
	const [statSpec, setStatSpec] = useState<boolean>(false)
	const [statDescription, setStatusDescription] = useState<boolean>(true)
	const [favorite, setFavorite] = useState([])
	const [dateTime, setDateTime] = useState<number>()
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
	console.log('item - ', item)

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
		const currentDate = new Date(`${day}-${month}-${year}`)

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
					...item.images
						.sort(
							(a, b) =>
								a.ItemImagesEntity.ordinal_number -
								b.ItemImagesEntity.ordinal_number
						)
						.map((img: any, i: number) => (
							<div className='relative' key={i}>
								<Fullscreen
									onClick={() => {
										setFullScreenImage(true)
										setSelectImageIndex(i)
										document.body.style.paddingRight = '8px'
										document.body.style.overflowY = 'hidden'
									}}
									className='size-[30px] !absolute z-20 top-0 
								 right-0 cursor-pointer active:scale-[0.9] duration-200 ease-in-out'
								/>
								<ImageCustom
									key={i}
									onClick={() => {
										setFullScreenImage(true)
										setSelectImageIndex(i)
										document.body.style.paddingRight = '8px'
										document.body.style.overflowY = 'hidden'
									}}
									className='w-[600px] h-[400px] !object-contain mb-[10px] cursor-pointer'
									src={img.path}
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
					...item.images
						.sort(
							(a, b) =>
								a.ItemImagesEntity.ordinal_number -
								b.ItemImagesEntity.ordinal_number
						)
						.map((img: any, i: number) => (
							<ImageCustom
								key={i}
								className='border-[2px] cursor-pointer w-[115px] h-[90px] active:scale-[0.95]
							 duration-300 ease-in-out'
								src={img.path}
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
							<h2 className={styles.name}>{item.name}</h2>
							<div className={styles.buy_statictic}>
								<div className={styles.sales_count}>
									<div className={styles.rating}>
										{[...Array(item.rating)].map((_, index) => (
											<ImageCustom key={index} src={Star} classNameImg={styles.img} />
										))}
									</div>
									Купили более
									<span className='mx-[5px] font-semibold'>
										<b>{Math.round(item.id / 50)}</b>
									</span>
									раз
								</div>
							</div>
							<div className={styles.prices}>
								<div>
									<span className={styles.discount_price}>
										от {formatCurrencyRub(item.price)}
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

									<Button
										// onClick={() => addDataInBasket({
										// 	id: item.id, count: 1, name: item.name, slug: item.slug,
										// 	price: item.price, description: item.description, images: item.images[0].path,
										// 	amount: item.amount,
										// 	show_if_no_count: item.settings.show_if_no_count
										// })}
										className={styles.recycle_button}
									>
										Оформить заявку
									</Button>
									<Button
										// onClick={() => addDataInBasket({
										// 	id: item.id, count: 1, name: item.name, slug: item.slug,
										// 	price: item.price, description: item.description, images: item.images[0].path,
										// 	amount: item.amount,
										// 	show_if_no_count: item.settings.show_if_no_count
										// })}
										className={styles.recycle_button}
									>
										Написать
									</Button>

									{true ? (
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
								<p>Остались вопросы, нужна помощь? Звоните!</p>
								<span className={clsx(styles.number, styles.phone_number)}>
									<a href='tel:+79646034448'>8 (964) 603 4448</a>
								</span>
								<p>
									или пишите в <span className={styles.whatsapp}>WhatsApp</span>
								</p>
								<span className={clsx(styles.number, styles.whatsapp_number)}>
									<a href='tel:+79649184770'>8 (964) 918 4770</a>
								</span>
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
		</Section>
	)
}
