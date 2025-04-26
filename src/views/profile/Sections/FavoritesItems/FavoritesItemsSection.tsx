'use state'
import { ProductsList } from '@/components/products/products-list/ProductsList'
import styles from './FavoritesItemsSection.module.scss'

export const FavoritesItemsSection = (
) => {

	return (
		<div className={styles.container}>
			<h1>Избранные товары</h1>
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

