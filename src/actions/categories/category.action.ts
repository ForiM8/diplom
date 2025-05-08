'use server'
import { notFound } from 'next/navigation'
import { api } from '../request'
import { ErrorObjectSetup } from '@/utils/errorObjectSetup'

export async function categoryGetAll() {
    const res = await api(
        `${process.env.NEXT_PUBLIC_API_URL}/post/category`,
        {
            method: 'GET',
            cache: 'no-store',
        }
    )

    const errorResult = await ErrorObjectSetup(res)
    if (errorResult?.error) {
        return errorResult
    }

    return res.json()
}

export const categoryGetTreeById = async (id: string | number) => {
    const res = await api(
        `${process.env.NEXT_PUBLIC_API_URL}/client/categories/child/${id}`,
        {
            method: 'GET',
            cache: 'no-store',
        }
    )

    const errorResult = await ErrorObjectSetup(res)
    if (errorResult?.error) {
        return errorResult
    }

    return res.json()
}

export const categoryGetBySlug = async (slug: string) => {
    const res = await api(
        `${process.env.NEXT_PUBLIC_API_URL}/categories/${slug}`,
        {
            method: 'GET',
            cache: 'no-store',
        }
    )

    const errorResult = await ErrorObjectSetup(res)
    if (errorResult?.error) {
        return errorResult
    }

    return res.json()
}

export const categoryGetBySlugSWR = async (url: string) => {
    const res = await api(url, {
        method: 'GET',
        cache: 'no-store',
    })

    const errorResult = await ErrorObjectSetup(res)
    if (errorResult?.error) {
        return errorResult
    }

    return res.json()
}
