import { Blog } from '@/views/blog/BlogPage'
import { HomePage } from '@/views/home/HomePage'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Блог',
}

export default function Home() {
    return <Blog />
}
