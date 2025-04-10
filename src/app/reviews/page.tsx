
import { Reviews } from '@/views/reviews/ReviewsPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Отзывы',
}

export default function Home() {
    return <Reviews />
}
