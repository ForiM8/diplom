'use client'
import { Product, ProductEdit, ProductInBasket, ProductInFavorite, ProductInResult } from '@/types/Product.types'
import { formatCurrencyRub } from '@/utils/formatCurrencyRub'
import clsx from 'clsx'
import { FC, useEffect, useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import styles from './ProductCard.module.scss'
import HeartBlackBorder from '@/assets/images/heart2.png'
import HeartRed from '@/assets/images/heartRed3.png'
import { Minus, Plus } from 'lucide-react'
import { count } from 'console'
import { Button } from '@/components/ui/button/Button'
import { ImageCustom } from '@/components/ui/ImageCustom'

type Props = {
	item: Product
	// itemsInBasked?: ProductInResult[]
	mutate?: () => void
	MyAdsSection?: boolean
	// itemsInFavorite?: ProductInFavorite[]
}
const itemsInBasked = [
	{
		count: 2,
		item: {
			id: 6857
		}
	}
]
const itemsInFavorite = [
	{
		id: 6857
	}
]
export const ProductCard: FC<Props> = ({ item, MyAdsSection }) => {
	const [isAction, setIsAction] = useState(false)
	const isInBasked = itemsInBasked?.find(
		(itemInBasked) => itemInBasked.item.id === item.id
	)
	const isInFavorite = itemsInFavorite?.find(
		(itemsInFavorite) => itemsInFavorite.id === item.id
	)

	return (
		<div className={styles.product_card}>
			{isInFavorite ? (
				!MyAdsSection && (
					<Button
						// onClick={() => deleteDataInFavorite({
						// 	id: item.id, count: 1, name: item.name, slug: item.slug,
						// 	price: item.price, description: item.description, images: item.images[0].path
						// })}
						variant='inFavoriteMain'
						className={styles.favorite}
					>
						<ImageCustom className='w-[25px] h-[25px]' src={HeartRed} />
					</Button>
				)
			) : (
				!MyAdsSection && (
					<Button
						// onClick={() => addDataInFavorite({
						// 	id: item.id, count: 1, name: item.name, slug: item.slug,
						// 	price: item.price, description: item.description, images: item.images[0].path, amount: item.amount
						// })}
						variant='inFavoriteMain'
						className={styles.favorite}
					>
						<ImageCustom className='w-[25px] h-[25px]' src={HeartBlackBorder} />
					</Button>
				)
			)}
			<div className={styles.image_container}>

				<a href={`/product/${item.slug}`}>
					{item.images.length ? (
						<ImageCustom
							onClick={() => setIsAction(true)}
							classNameImg={styles.image}
							src={item.images[0].path}
							alt='product-image'
						/>
					) : (
						<div className='w-[200px] h-[220px] rounded-[8px] bg-[#ebebeb] animate-pulse'></div>
					)}
				</a>
			</div>
			<div className={styles.item_info}>
				<div className={styles.main_text}>
					<div className={styles.prices}>
						<span className={styles.sale_price}>
							{formatCurrencyRub(item.price)}
						</span>
					</div>
					<a href={`/product/${item.slug}`}>

						<p title={item.name} className={styles.title}>{`${item.name.slice(
							0, item.amount > 0 ? 43 : 63
						)}...`}</p>
					</a>

				</div>
				<div>
					<div className={styles.item_in_basked_container}>
						{isInBasked && isInBasked?.item.id ? (
							!MyAdsSection && (
								<>
									<Button
										onClick={() => {
											// addDataInBasket({
											// 	id: item.id,
											// 	count: isInBasked && isInBasked?.count - 1 || basket[0]?.count - 1,
											// 	name: item.name, slug: item.slug,
											// 	price: item.price, description: item.description, images: item.images[0].path,
											// 	amount: item.amount,
											// 	show_if_no_count: item.settings.show_if_no_count
											// });
										}}
										variant='small'
									>
										<Minus />
									</Button>
									<Button disabled variant='muted'>
										{isInBasked?.count}
									</Button>
									<Button
										onClick={() => {
											// addDataInBasket({
											// 	id: item.id,
											// 	count: isInBasked && isInBasked?.count + 1 || basket[0]?.count + 1,
											// 	name: item.name, slug: item.slug,
											// 	price: item.price, description: item.description, images: item.images[0].path,
											// 	amount: item.amount,
											// 	show_if_no_count: item.settings.show_if_no_count
											// });
										}}
										variant='small'
									>
										<Plus />
									</Button>
								</>
							)

						) : (
							!MyAdsSection && (
								item.settings.show_if_no_count === false && item.amount === 0 ? (
									<Button

										className={styles.recycle_button}
										variant='muted'
									>
										Нет в наличии
									</Button>
								) : (
									<>
										<Button
											// onClick={() => addDataInBasket({
											// 	id: item.id, count: 1, name: item.name, slug: item.slug,
											// 	price: item.price, description: item.description, images: item.images[0].path,
											// 	amount: item.amount
											// })}
											className={styles.recycle_button}
										>
											В корзину
										</Button>

									</>
								)
							)

						)}
					</div>

				</div>
			</div>
			<div
				className={clsx([
					styles.action,
					{
						[styles.start]: isAction,
						[styles.stop]: !isAction,
					},
				])}
			>
				<AiOutlineLoading3Quarters
					className={clsx([styles.load_circle])}
					size={30}
				/>
			</div>
		</div>
	)
}
