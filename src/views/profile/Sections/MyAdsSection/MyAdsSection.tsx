'use state'
import { ProductsList } from '@/components/products/products-list/ProductsList'
import styles from './MyAdsSection.module.scss'
import { Select } from '@/components/ui/select/Select'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button/Button'
import { redirect } from 'next/navigation'
import userStore from '@/stores/user/UserStores'
import { itemGetByUser } from '@/actions/products/products.action'
import { observer } from 'mobx-react-lite'

interface User {
    name: string;
    email: string;
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

interface Product {
    _id: string;
    title: string;
    description: string;
    price: string;
    image: string;
    categorySlug: string;
    user: User;
}

export const MyAdsSection = observer((
) => {
    const [productData, setProductData] = useState<Product[]>()
    const getProduct = () => {
        if (userStore?.user?.email) {
            console.log('userStore?.user?.email - ', userStore?.user?.email);
            itemGetByUser(userStore?.user?.email)
                .then(res => {
                    console.log('res - ', res);
                    setProductData(res?.result);
                })
                .catch(error => {
                    console.error('Ошибка при получении данных:', error);
                });
        }
    };
    useEffect(() => {

        getProduct()

    }, [userStore?.user?.email])
    console.log('productData - ', productData)
    return (
        <div className={styles.container}>
            <h1>Мои объявления</h1>
            <div>
                {productData ? (
                    <ProductsList MyAdsSection={true} productData={productData} />
                ) : (
                    // <ProductListSkeleton />
                    null
                )}
            </div>
            <Button
                className={styles.btn_size}
                variant='primary'
                onClick={() => redirect('/make-ads')}
            >
                Разместить объявление
            </Button>

        </div>
    )
})
