'use server'
import { ErrorObjectSetup } from "@/utils/errorObjectSetup"
import { api } from "../request"
import { revalidatePath } from "next/cache"

export const favoriteCreate = async (data: any) => {
    console.log('data - ', data)
    const res = await api(`${process.env.NEXT_PUBLIC_API_URL}/post/favorite`, {
        method: 'POST',
        body: JSON.stringify(data),
    })

    const errorResult = await ErrorObjectSetup(res)
    if (errorResult?.error) {
        return errorResult
    }
    revalidatePath('/product')
    return res.json()
}

export async function favoriteGetAll() {
    const res = await api(
        `${process.env.NEXT_PUBLIC_API_URL}/get/favorite`,
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

export const favoriteGetByUser = async (
    email?: string,
) => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/get/favorite/userId/${email}`
    const res = await api(url, {
        method: 'GET',
    })
    const errorResult = await ErrorObjectSetup(res)
    if (errorResult?.error) {
        return errorResult
    }
    return res.json()
}