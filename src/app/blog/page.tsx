import { BlogPage } from '@/views/blog/BlogPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Блог',
}

export default function Blog() {
    return <BlogPage />
}
