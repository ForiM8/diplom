
import { ReviewsPage } from '@/views/reviews/ReviewsPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Отзывы',
}

export default function Reviews() {
    return <ReviewsPage />
}
