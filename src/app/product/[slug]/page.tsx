
import { basketGetAll, basketGetByUser } from '@/actions/basket/basket.action'
import { favoriteGetByUser } from '@/actions/favorite/favorite.action'
import { orderGetAll } from '@/actions/order/order.actions'
import { itemGetByCategory, itemGetById } from '@/actions/products/products.action'
import { userGet } from '@/actions/user/user.actions'
import { authOptions } from '@/app/config/auth'
import { withErrorHandler } from '@/utils/withErrorHandler'
import { DetailProductPage } from '@/views/detail-product/DetailProductPage'
import { getServerSession } from 'next-auth'


export default async function DetailProduct({ params }: { params: { slug: string } }) {
	const session = await getServerSession(authOptions);
	const { data: user, error: errorUser } = await withErrorHandler(() =>
		userGet({
			email: session?.user?.email
		})
	);
	const { data: productData, error: productError } = await withErrorHandler(() =>
		itemGetById(params?.slug)
	)
	const { data: basket, error: basketError } = await withErrorHandler(() =>
		basketGetByUser(session?.user?.email || '')
	)
	const { data: favorites, error: favoritesError } = await withErrorHandler(() =>
		favoriteGetByUser(session?.user?.email || '')
	)

	console.log('orderData - ', basket)
	return (
		<DetailProductPage item={productData?.result} basketData={basket?.result} userData={user?.result} favoritesData={favorites?.result} />
	)
}
