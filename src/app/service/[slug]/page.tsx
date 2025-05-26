import { basketGetAll, basketGetByUser } from '@/actions/basket/basket.action';
import { categoryGetBySlug } from '@/actions/categories/category.action';
import { favoriteGetAll, favoriteGetByUser } from '@/actions/favorite/favorite.action';
import { itemGetByCategory } from '@/actions/products/products.action';
import { userGet } from '@/actions/user/user.actions';
import { authOptions } from '@/app/config/auth';
import { withErrorHandler } from '@/utils/withErrorHandler';
import { HomePage } from '@/views/home/HomePage'
import { ServicePage } from '@/views/service/ServicePage'
import { Metadata } from 'next'
import { getServerSession } from 'next-auth';

export const metadata: Metadata = {
    title: 'Услуга',
}

export default async function Service({ params }: { params: { slug: string } }) {
    const session = await getServerSession(authOptions);

    const { data: user, error: errorUser } = await withErrorHandler(() =>
        userGet({
            email: session?.user?.email
        })
    );
    console.log('session?.user?.email - ', session?.user?.email)
    const { data: productData, error: resultError } = await withErrorHandler(() =>
        itemGetByCategory(params?.slug)
    )
    const { data: categoryData, error: categoryError } = await withErrorHandler(() =>
        categoryGetBySlug(params?.slug)
    )
    const { data: favoriteData, error: favoriteError } = await withErrorHandler(() =>
        favoriteGetByUser(session?.user?.email || '')
    )
    const { data: basketData, error: basketDataError } = await withErrorHandler(() =>
        basketGetByUser(session?.user?.email || '')
    )
    return <ServicePage
        userData={user?.result}
        productData={productData?.result}
        categoryData={categoryData?.result}
        favoriteData={favoriteData?.result}
        basketData={basketData?.result}
    />
}
