import { categoryGetAll } from '@/actions/categories/category.action'
import { userGet } from '@/actions/user/user.actions';
import { authOptions } from '@/app/config/auth';
import { withErrorHandler } from '@/utils/withErrorHandler'
import { CreationAds } from '@/views/CreationAds/CreationAds'
import { getServerSession } from 'next-auth';

export default async function Profile() {
    const { data: categoryData, error: errorCategoryData } = await withErrorHandler(() =>
        categoryGetAll()
    )
    const session = await getServerSession(authOptions);

    const { data: user, error: errorUser } = await withErrorHandler(() =>
        userGet({
            email: session?.user?.email
        })
    );
    console.log('categoryData - ', categoryData)
    return (
        <CreationAds categoryData={categoryData?.result} userData={user?.result} />
    )
}
