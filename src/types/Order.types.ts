export type CreateOrderDTO = {
    city: string
    street: string
    zip_code: number
    items: { item_id: number; count: number }[]
}
export enum OrderStatusEnum {
    New = 1,
    InDelivery = 2,
    ReadyToPickUp = 3,
    Delivered = 4,
    Canceled = 5,
}

export enum OrderPaymentStatusEnumEn {
    Pending = 0,
    Completed = 1,
    Failed = 2,
}

export enum OrderPaymentMethodEnumEn {
    Cash = 1,
    CreditCard = 2,
}


export enum DeliveryMethodEnumEn {
    pickup = 1,
    shipping = 2,

}
// export type CreateOrderDTO = {
// 	city: string
// 	street: string
// 	zip_code: number
// 	items: { item_id: number; count: number }[]
// }

export type OrderCreateItem = {
    id: number;
    count: number;
}

export interface OrderUpdateType {
    status: number,
    order_number: string,
}

export interface OrderCreateType {
    city_id: string;
    street: string;
    delivery_method: DeliveryMethodEnumEn;
    payment_method: OrderPaymentMethodEnumEn;
    zip_code: string | number;
    items: OrderCreateItem[];
}

export enum OrderPaymentMethodEnumRu {
    'Наличными' = 1,
    'Кредитной картой' = 2,
}

export interface OrderItemType {
    id: number
    order_number: string
    user_id: number
    delivery_status: number
    payment_status: number
    payment_method: number
    city_id: number
    street: string
    zip_code: string
    item_id: number
    count: number
    date_delivery?: string | null
    comments: Array<Record<string, any>>
    delivery_method: number
    createdAt: string
    updatedAt: string
    orderItems: any[]

    user: {
        id: string
        role: number
        email: string
        status: number
        phone: string
        city_id: number
        telegram: string
    }

    city: {
        name: string
        id: number
        region_id: number
        country_id: number
    }
}


export type OrderResponse = {
    isArray: boolean
    result: OrderItemType[]
}

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

export type Orders = {
    _id: string;
    item: Item;
    customer: Customer;
    data: string
}
