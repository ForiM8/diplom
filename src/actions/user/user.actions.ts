'use server'
import { notFound } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { api, apiSecure } from '../request'
import { ErrorObjectSetup } from '@/utils/errorObjectSetup'

export const userCreate = async (data: any) => {
    console.log('data - ', data)
    const res = await api(`${process.env.NEXT_PUBLIC_API_URL}/post/users`, {
        method: 'POST',
        body: JSON.stringify(data),
    })

    const errorResult = await ErrorObjectSetup(res)
    if (errorResult?.error) {
        return errorResult
    }
    return res.json()
}

export const userUpdate = async (data: any) => {

    console.log('userUpdate with data:', data);
    const res = await apiSecure(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
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


export const userGet = async () => {
    const res = await apiSecure(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
        method: 'GET',
    });

    const errorResult = await ErrorObjectSetup(res)
    if (errorResult?.error) {
        return errorResult
    }

    return res.json();
};



export const userDelete = async (data: any) => {
    const res = await apiSecure(
        `${process.env.NEXT_PUBLIC_API_URL}/user/delete`,
        {
            method: 'PATCH',
            body: JSON.stringify(data),
        }
    )

    const errorResult = await ErrorObjectSetup(res)
    if (errorResult?.error) {
        return errorResult
    }

    return res.json()
}
