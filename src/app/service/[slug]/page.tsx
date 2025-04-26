import { HomePage } from '@/views/home/HomePage'
import { ServicePage } from '@/views/service/ServicePage'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Услуга',
}

export default async function Service({ params }: { params: { slug: string } }) {
    const slug = params.slug;
    return <ServicePage slug={slug} />
}
