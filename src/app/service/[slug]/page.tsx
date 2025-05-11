import { itemGetByCategory } from '@/actions/products/products.action';
import { withErrorHandler } from '@/utils/withErrorHandler';
import { HomePage } from '@/views/home/HomePage'
import { ServicePage } from '@/views/service/ServicePage'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Услуга',
}

export default async function Service({ params }: { params: { slug: string } }) {
    // const slug = params?.slug;
    const { data: productData, error: resultError } = await withErrorHandler(() =>
        itemGetByCategory(params?.slug)
    )
    return <ServicePage slug={params?.slug} productData={productData?.result} />
}
