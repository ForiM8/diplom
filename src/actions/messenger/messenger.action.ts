'use server'

import { ErrorObjectSetup } from "@/utils/errorObjectSetup"
import { api, apiSecure } from "../request"
import { revalidatePath } from "next/cache"

export const messengerCreate = async (data: any) => {
    console.log('data - ', data)
    const res = await api(`${process.env.NEXT_PUBLIC_API_URL}/post/group`, {
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

export const messengerGetByUser = async (
    email?: string,
) => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/get/group/userId/${email}`

    const res = await api(url, {
        method: 'GET',
    })
    const errorResult = await ErrorObjectSetup(res)
    if (errorResult?.error) {
        return errorResult
    }
    return res.json()
}

export const messengerGetById = async (
    id: string,
) => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/get/groupById/${id}`
    const res = await api(url, {
        method: 'GET',
    })
    const errorResult = await ErrorObjectSetup(res)
    if (errorResult?.error) {
        return errorResult
    }
    return res.json()
}

export const messengerUpdate = async (data: any) => {

    console.log('messengerUpdate with data:', data);
    const res = await apiSecure(`${process.env.NEXT_PUBLIC_API_URL}/patch/group`, {
        method: 'PATCH',
        body: JSON.stringify(data),
    });

    const errorResult = await ErrorObjectSetup(res)
    if (errorResult?.error) {
        return errorResult
    }

    revalidatePath('/product')
    return res.json();
};