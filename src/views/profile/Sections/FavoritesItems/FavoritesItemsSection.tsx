'use state'
import { ProductsList } from '@/components/products/products-list/ProductsList'
import styles from './FavoritesItemsSection.module.scss'
import { Select } from '@/components/ui/select/Select'
import { useEffect, useState } from 'react'
import { Order } from '@/types/Order.types'
import { favoriteGetByUser } from '@/actions/favorite/favorite.action'
import { ProductsBasketList } from '@/components/products/prodicts-basket-list/ProductsBasketList'

export const FavoritesItemsSection = (
	{ favoriteData }: { favoriteData: Order[] }
) => {
	const [filterValueIsSelect, setFilterValueIsSelect] = useState(filtersValues[0])

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