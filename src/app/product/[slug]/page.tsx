
import { DetailProductPage } from '@/views/detail-product/DetailProductPage'


export default async function DetailProduct({ params }: { params: { slug: string } }) {

	return (
		<DetailProductPage />
	)
}
