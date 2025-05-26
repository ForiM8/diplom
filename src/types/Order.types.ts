export type Image = {
    image: string;
}

export type User = {
    name: string;
    email: string;
    _id: string;
    rating: number;
    reviews: string;
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
export enum OrderPaymentStatusEnumEn {
    Pending = 0,
    Completed = 1,
    Failed = 2,
}
export enum DeliveryMethodEnumEn {
    pickup = 1,
    shipping = 2,

}
export type OrderItem = {
    _id: string;
    item: Item;
    customer: Customer;
    data: string;
    images: Image[]
    title: string
    price: string
}

export type Order = {
    _id: string;
    customer: {
        _id: string;
        email: string;
        phone: string;
        name: string;
        city: string;
        password: string;
    };
    status: number;
    item: OrderItem;
    data: string
}
export enum OrderStatusEnum {
    New = 1,
    InDelivery = 2,
    ReadyToPickUp = 3,
    Delivered = 4,
    Canceled = 5,
}