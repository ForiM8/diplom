'use server'

import { notFound } from 'next/navigation'

export const login = async (email: string, password: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
        const errorData = await res.text(); // Получаем текст ответа
        console.error('Error response:', errorData);
        throw new Error(`HTTP error! status: ${res.status}, message: ${errorData}`);
    }

    return res.json();
}

export const refresh = async (refreshToken: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refreshToken }),
    })
    if (res.status === 404) {
        notFound()
    } else if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export const logout = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    if (res.status === 404) {
        notFound()
    } else if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
