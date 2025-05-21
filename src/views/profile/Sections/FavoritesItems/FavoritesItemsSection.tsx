'use state'
import { ProductsList } from '@/components/products/products-list/ProductsList'
import styles from './FavoritesItemsSection.module.scss'
import { Select } from '@/components/ui/select/Select'
import { useEffect, useState } from 'react'
import { Orders } from '@/types/Order.types'
import userStore from '@/stores/user/UserStores'
import { favoriteGetByUser } from '@/actions/favorite/favorite.action'
import { ProductsBasketList } from '@/components/products/prodicts-basket-list/ProductsBasketList'

export const FavoritesItemsSection = (
) => {
	const [filterValueIsSelect, setFilterValueIsSelect] = useState(filtersValues[0])
	const [favoriteData, setFavoriteData] = useState<Orders[]>()
	const getProduct = () => {
		if (userStore?.user?.email) {
			console.log('userStore?.user?.email - ', userStore?.user?.email);
			favoriteGetByUser(userStore?.user?.email)
				.then(res => {
					console.log('res - ', res);
					setFavoriteData(res?.result);
				})
				.catch(error => {
					console.error('Ошибка при получении данных:', error);
				});
		}
	};
	useEffect(() => {

		getProduct()

	}, [userStore?.user?.email])
	console.log('favoriteData - ', favoriteData)
	return (
		<div className={styles.container}>
			<h1>Избранные товары</h1>
			<Select
				items={filtersValues}
				value={filterValueIsSelect}
				onSelect={(value) => setFilterValueIsSelect(value)}
				className={styles.filters}
				classNameContent={styles.filtersContent}
			/>
			<div>
				{favoriteData && favoriteData?.length > 0 ? (
					<ProductsBasketList
						itemsInBase={favoriteData}
						basketData={favoriteData}
					// favoriteItem={favoriteItem}
					/>
				) : (
					// <ProductListSkeleton />
					null
				)}
			</div>
			<h2>Возможно вам понравится</h2>
			<div>
				{true ? (
					<ProductsList />
				) : (
					// <ProductListSkeleton />
					null
				)}
			</div>

		</div>
	)
}

const filtersValues = [
	{
		label: 'Сначала новые',
		value: '0',
	},
	{
		label: 'Сначала старые',
		value: '1',
	},
	{
		label: 'Самые дешевые',
		value: '2',
	},
	{
		label: 'Самые дорогие',
		value: '3',
	},
]