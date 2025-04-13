
import { HomePage } from '@/views/home/HomePage'
import { ServicePage } from '@/views/service/ServicePage'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Услуга',
}

export default function Service({ params }: { params: { slug: string } }) {
    return <ServicePage slug={params.slug} />
}
