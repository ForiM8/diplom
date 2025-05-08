export type SessionType = {
    expires: string
    user: {
        accessTokenExpires: string
        accessToken: string
        email: string
        status: number
        id: number
        role: number
        exp: number
    }
}
