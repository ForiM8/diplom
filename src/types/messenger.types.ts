export type User = {
    name: string;
    email: string;
    _id: string;
    rating: number;
    reviews: string | number;
    phone: string;
    city: string;
    password: string;
    accessToken: string;
    accessTokenExpires: number;
    refreshToken: string;
    status: number;
    iat: number;
    exp: number;
    jti: string;
    error: string;
}

export type Image = {
    image: string;
}

export type Item = {
    _id: string;
    title: string;
    description: string;
    price: string;
    images: Image[];
    categorySlug: string;
    user: User;
}

export type Customer = {
    name: string;
    email: string;
    _id: string;
    rating: number;
    reviews: number;
    phone: string;
    city: string;
    password: string;
    accessToken: string;
    accessTokenExpires: number;
    refreshToken: string;
    status: number;
    iat: number;
    exp: number;
    jti: string;
    error: string;
}

export type Message = {
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
    text: string
    dateText: string
}

export type MessageDocument = {
    _id: string;
    item: Item;
    customer: Customer;
    message: Message[];
    data: string;
}
