export type CreateUser = {
    email: string
    name: string
    password: string
    confirm_password: string
}

export type User = {
    _id: string
    city_id: number
    city: string
    createdAt: string
    email: string
    id: number
    name: string
    password_hash: string
    phone: number
    role: number
    status: number
    telegram: string
    updatedAt: string
    address: string
    street: string
    house: string
    flat: string
    zip_code: string
}

export type LoginUser = {
    email: string
    password: string
    name: string
}
