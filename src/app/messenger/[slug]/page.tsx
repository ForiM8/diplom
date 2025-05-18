
import { messengerGetById } from '@/actions/messenger/messenger.action'
import { orderGetAll } from '@/actions/order/order.actions'
import { itemGetByCategory, itemGetById } from '@/actions/products/products.action'
import { withErrorHandler } from '@/utils/withErrorHandler'
import { DetailProductPage } from '@/views/detail-product/DetailProductPage'
import { MessengerPage } from '@/views/messenger/MessengerPage'


export default async function Messenger({ params }: { params: { slug: string } }) {
    const { data: messageData, error: messageError } = await withErrorHandler(() =>
        messengerGetById(params?.slug)
    )
    console.log('orderData - ', messageData)
    return (
        <MessengerPage messageData={messageData?.result} />
    )
}
