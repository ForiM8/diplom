import { categoryGetAll } from '@/actions/categories/category.action'
import { withErrorHandler } from '@/utils/withErrorHandler'
import { CreationAds } from '@/views/CreationAds/CreationAds'

export default async function Profile() {
    const { data: categoryData, error: errorCategoryData } = await withErrorHandler(() =>
        categoryGetAll()
    )
    console.log('categoryData - ', categoryData)
    return (
        <CreationAds categoryData={categoryData?.result} />
    )
}
