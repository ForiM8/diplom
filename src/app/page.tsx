
import { categoryGetAll } from '@/actions/categories/category.action'
import { withErrorHandler } from '@/utils/withErrorHandler'
import { HomePage } from '@/views/home/HomePage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Главная',
}

export default async function Home() {
  const { data: categoryData, error: errorCategoryData } = await withErrorHandler(() =>
    categoryGetAll()
  )
  console.log('categoryData - ', categoryData)
  return <HomePage categoryData={categoryData?.result} />
}
