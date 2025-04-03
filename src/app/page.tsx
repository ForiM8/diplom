
import { HomePage } from '@/views/home/HomePage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Главная',
}

export default function Home() {
  return <HomePage />
}
