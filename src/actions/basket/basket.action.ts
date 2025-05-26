'use server'
import { ErrorObjectSetup } from "@/utils/errorObjectSetup"
import { api } from "../request"
import { revalidatePath } from "next/cache"

export const basketCreate = async (data: any) => {
    console.log('data - ', data)
    const res = await api(`${process.env.NEXT_PUBLIC_API_URL}/post/basket`, {
        method: 'POST',
        body: JSON.stringify(data),
    })

    const errorResult = await ErrorObjectSetup(res)
    if (errorResult?.error) {
        return errorResult
    }
    revalidatePath('/product')
    revalidatePath('/service')
    return res.json()
}

export async function basketGetAll() {
    const res = await api(
        `${process.env.NEXT_PUBLIC_API_URL}/get/basket`,
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

export const basketGetByUser = async (
    email?: string,
) => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/get/basket/userId/${email}`
    const res = await api(url, {
        method: 'GET',
    })
    const errorResult = await ErrorObjectSetup(res)
    if (errorResult?.error) {
        return errorResult
    }
    return res.json()
}

export const basketGetByUserAndItemId = async (
    email?: string,
    itemId?: string
) => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/get/basket/userIdAndItemId/${email}/${itemId}`;
    const res = await api(url, {
        method: 'GET',
    });
    const errorResult = await ErrorObjectSetup(res);
    if (errorResult?.error) {
        return errorResult;
    }
    return res.json();
};

export const basketClear = async () => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/clear/basket`
    const res = await api(url, {
        method: 'DELETE',
    })
    const errorResult = await ErrorObjectSetup(res)
    if (errorResult?.error) {
        return errorResult
    }
    return res.json()
}

export const basketClearByID = async (
    id: string
) => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/clear/basketById/${id}`
    const res = await api(url, {
        method: 'DELETE',
    })
    const errorResult = await ErrorObjectSetup(res)
    if (errorResult?.error) {
        return errorResult
    }
    revalidatePath('/profile/basket')
    return res.json()
}