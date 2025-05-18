
import { orderGetAll } from '@/actions/order/order.actions'
import { itemGetByCategory, itemGetById } from '@/actions/products/products.action'
import { withErrorHandler } from '@/utils/withErrorHandler'
import { DetailProductPage } from '@/views/detail-product/DetailProductPage'


export default async function DetailProduct({ params }: { params: { slug: string } }) {
	const { data: productData, error: productError } = await withErrorHandler(() =>
		itemGetById(params?.slug)
	)
	const { data: orderData, error: orderError } = await withErrorHandler(() =>
		orderGetAll()
	)
	console.log('orderData - ', orderData)
	return (
		<DetailProductPage item={productData?.result} orders={orderData?.result} />
	)
}
