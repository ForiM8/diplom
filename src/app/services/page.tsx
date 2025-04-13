
import { ServicesPage } from '@/views/services/ServicesPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Услуги',
}

export default function Services() {
    return <ServicesPage />
}
