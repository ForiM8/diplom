'use server'
import { ErrorObjectSetup } from "@/utils/errorObjectSetup"
import { api } from "../request"
import { revalidatePath } from "next/cache"

export const productCreate = async (data: any) => {
    console.log('data - ', data)
    const res = await api(`${process.env.NEXT_PUBLIC_API_URL}/post/products`, {
        method: 'POST',
        body: JSON.stringify(data),
    })

    const errorResult = await ErrorObjectSetup(res)
    if (errorResult?.error) {
        return errorResult
    }
    return res.json()
}
export const productClearByID = async (
    id: string
) => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/clear/productsById/${id}`
    const res = await api(url, {
        method: 'DELETE',
    })
    const errorResult = await ErrorObjectSetup(res)
    if (errorResult?.error) {
        return errorResult
    }
    revalidatePath('/profile/advertisements')
    return res.json()
}
export const itemGetByCategory = async (
    slug: string,
) => {

    const url = `${process.env.NEXT_PUBLIC_API_URL}/get/products/${slug}`

    const res = await api(url, {
        method: 'GET',
    })
    const errorResult = await ErrorObjectSetup(res)
    if (errorResult?.error) {
        return errorResult
    }
    return res.json()
}

export const itemGetById = async (
    slug: string,
) => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/get/productsById/${slug}`
    const res = await api(url, {
        method: 'GET',
    })
    const errorResult = await ErrorObjectSetup(res)
    if (errorResult?.error) {
        return errorResult
    }
    return res.json()
}

export const itemGetByUser = async (
    slug?: string,
) => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/get/products/userId/${slug}`

    const res = await api(url, {
        method: 'GET',
    })
    const errorResult = await ErrorObjectSetup(res)
    if (errorResult?.error) {
        return errorResult
    }
    return res.json()
}