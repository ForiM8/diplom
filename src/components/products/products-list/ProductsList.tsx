
import { ProductCard } from '@/components/products/product-card/ProductCard';
import { useMemo } from 'react';
import styles from './ProductsList.module.scss';
import { usePathname } from 'next/navigation';
import { ITEMS } from '@/components/dataTime/dataTime';

export const ProductsList = ({ MyAdsSection }: { MyAdsSection?: boolean }) => {
	const pathname = usePathname();
	const itemsList = useMemo(() => {
		return ITEMS.map((item: any) => {
			return (
				<ProductCard
					key={item.id}
					item={item}
					MyAdsSection={MyAdsSection}
				/>
			);
		});
	}, [ITEMS]);

	return (
		<>
			{pathname === '/profile/favorites' || pathname === '/profile/advertisements' ?
				(<div className={styles.listFavorites}>{itemsList}</div>) :
				(<div className={styles.list}>{itemsList}</div>)
			}
		</>
	);
};
