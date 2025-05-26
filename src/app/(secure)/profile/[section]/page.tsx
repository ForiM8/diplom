import { getServerSession } from 'next-auth';
import { userGet } from '@/actions/user/user.actions';
import { orderGetByUser } from '@/actions/order/order.actions';
import { withErrorHandler } from '@/utils/withErrorHandler';
import { ProfilePage } from '@/views/profile/ProfilePage';
import { authOptions } from '@/app/config/auth';
import { favoriteGetByUser } from '@/actions/favorite/favorite.action';
import { messengerGetByUser } from '@/actions/messenger/messenger.action';
import { itemGetByUser } from '@/actions/products/products.action';
import { basketGetByUser } from '@/actions/basket/basket.action';

export default async function Profile() {
	const session = await getServerSession(authOptions);

	const { data: user, error: errorUser } = await withErrorHandler(() =>
		userGet({
			email: session?.user?.email
		})
	);
	const { data: orders, error: errorOrders } = await withErrorHandler(() =>
		orderGetByUser(session?.user?.email || '')
	);
	const { data: favorites, error: favoritesError } = await withErrorHandler(() =>
		favoriteGetByUser(session?.user?.email || '')
	)
	const { data: messengers, error: messengersError } = await withErrorHandler(() =>
		messengerGetByUser(session?.user?.email || '')
	)
	const { data: itemsAd, error: itemsAdError } = await withErrorHandler(() =>
		itemGetByUser(session?.user?.email || '')
	)
	const { data: basket, error: basketError } = await withErrorHandler(() =>
		basketGetByUser(session?.user?.email || '')
	)

	console.log('user - ', user);
	console.log('orders - ', orders);

	return (
		<ProfilePage user={user?.result} orderData={orders?.result} favoriteData={favorites?.result} messengerData={messengers?.result} productData={itemsAd?.result} basketData={basket?.result} />
	);
}
