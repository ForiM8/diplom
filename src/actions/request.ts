import { authOptions } from '@/app/config/auth'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import { isExpired } from './jwt.service'
import { SessionType } from '@/types/Auth.types'

export const api = async (url: string, params: any, json = true) => {
    let session: SessionType
    session = (await getServerSession(authOptions)) as SessionType

    let opts: any
    if (json) {
        opts = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + session?.user.accessToken,
            },
            ...params,
        }
    } else {
        opts = {
            headers: {
                Authorization: 'Bearer ' + session?.user.accessToken,
            },
            ...params,
        }
    }

    return await fetch(url, opts)
}

export const apiSecure = async (url: string, params: any, json = true) => {
    let session: SessionType
    session = (await getServerSession(authOptions)) as SessionType

    // console.log('url', url)

    if (!session || !session.user.email || isExpired(session.user.exp)) {
        return NextResponse.json(
            { error: 'Unauthorized' },
            { statusText: 'Unauthorized', status: 200 }
        )
    }

    let opts: any
    if (json) {
        opts = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + session?.user.accessToken,
            },
            ...params,
        }
    } else {
        opts = {
            headers: {
                Authorization: 'Bearer ' + session?.user.accessToken,
            },
            ...params,
        }
    }

    return await fetch(url, opts)
}
