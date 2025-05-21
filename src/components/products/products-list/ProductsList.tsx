
import { ProductCard } from '@/components/products/product-card/ProductCard';
import { useMemo } from 'react';
import styles from './ProductsList.module.scss';
import { usePathname } from 'next/navigation';
import { ITEMS } from '@/components/dataTime/dataTime';

interface User {
	name: string;
	email: string;
	phone: string;
	city: string;
	password: string;
	accessToken: string;
	accessTokenExpires: number;
	refreshToken: string;
	status: number;
	iat: number;
	exp: number;
	jti: string;
	error: string;
}

interface Product {
	_id: string;
	title: string;
	description: string;
	price: string;
	image: string;
	categorySlug: string;
	user: User;
}

export const ProductsList = ({ MyAdsSection, productData }: { MyAdsSection?: boolean, productData?: Product[] }) => {
	const pathname = usePathname();
	const itemsList = useMemo(() => {
		return productData?.map((item: Product) => {
			return (
				<ProductCard
					key={item._id}
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
