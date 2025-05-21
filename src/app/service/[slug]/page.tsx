import { basketGetAll } from '@/actions/basket/basket.action';
import { categoryGetBySlug } from '@/actions/categories/category.action';
import { favoriteGetAll } from '@/actions/favorite/favorite.action';
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
    const { data: categoryData, error: categoryError } = await withErrorHandler(() =>
        categoryGetBySlug(params?.slug)
    )
    const { data: favoriteData, error: favoriteError } = await withErrorHandler(() =>
        favoriteGetAll()
    )
    const { data: basketData, error: basketError } = await withErrorHandler(() =>
        basketGetAll()
    )
    return <ServicePage
        productData={productData?.result}
        categoryData={categoryData?.result}
        favoriteData={favoriteData?.result}
        basketData={basketData?.result}
    />
}
