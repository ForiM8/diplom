
import { Services } from '@/views/services/ServicesPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Услуги',
}

export default function Home() {
    return <Services />
}
