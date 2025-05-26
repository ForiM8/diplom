
import { messengerGetById } from '@/actions/messenger/messenger.action'
import { orderGetAll } from '@/actions/order/order.actions'
import { itemGetByCategory, itemGetById } from '@/actions/products/products.action'
import { userGet } from '@/actions/user/user.actions'
import { authOptions } from '@/app/config/auth'
import { withErrorHandler } from '@/utils/withErrorHandler'
import { DetailProductPage } from '@/views/detail-product/DetailProductPage'
import { MessengerPage } from '@/views/messenger/MessengerPage'
import { getServerSession } from 'next-auth'


export default async function Messenger({ params }: { params: { slug: string } }) {
    const { data: messageData, error: messageError } = await withErrorHandler(() =>
        messengerGetById(params?.slug)
    )
    const session = await getServerSession(authOptions);
    const { data: user, error: errorUser } = await withErrorHandler(() =>
        userGet({
            email: session?.user?.email
        })
    );
    console.log('orderData - ', messageData)
    return (
        <MessengerPage userData={user?.result} messageData={messageData?.result} />
    )
}
