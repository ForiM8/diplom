'use server'
import { ErrorObjectSetup } from "@/utils/errorObjectSetup"
import { api } from "../request"
import { revalidatePath } from "next/cache"

export const orderCreate = async (data: any) => {
    console.log('data - ', data)
    const res = await api(`${process.env.NEXT_PUBLIC_API_URL}/post/order`, {
        method: 'POST',
        body: JSON.stringify(data),
    })

    const errorResult = await ErrorObjectSetup(res)
    if (errorResult?.error) {
        return errorResult
    }
    return res.json()
}

export async function orderGetAll() {
    const res = await api(
        `${process.env.NEXT_PUBLIC_API_URL}/get/order`,
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

export const orderGetByUser = async (
    email?: string,
) => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/get/order/userId/${email}`

    const res = await api(url, {
        method: 'GET',
    })
    const errorResult = await ErrorObjectSetup(res)
    if (errorResult?.error) {
        return errorResult
    }
    return res.json()
}


export const orderDeleteById = async (
    id?: string,
) => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/delete/order/${id}`

    const res = await api(url, {
        method: 'DELETE',
        cache: 'no-store',
    })
    const errorResult = await ErrorObjectSetup(res)
    if (errorResult?.error) {
        return errorResult
    }
    revalidatePath('/profile')
    return res.json()
}