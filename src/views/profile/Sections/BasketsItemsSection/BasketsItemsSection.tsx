'use state'

import { ProductsList } from '@/components/products/products-list/ProductsList'
import { useEffect, useState } from 'react'
import styles from './BasketsItemsSection.module.scss'
import { Button } from '@/components/ui/button/Button'
import { observer } from 'mobx-react-lite'
import { Orders } from '@/types/Order.types'
import { basketGetByUser } from '@/actions/basket/basket.action'
import userStore from '@/stores/user/UserStores'
import GlobalLoaderStore from '@/stores/global-loader/GlobalLoaderStore'
import { ProductsBasketList } from '@/components/products/prodicts-basket-list/ProductsBasketList'
// 
export const BasketsItemsSection = observer(() => {
    const { isLoading, toggleLoader } = GlobalLoaderStore
    const [basketData, setBasketData] = useState<Orders[]>()
    const getProduct = () => {
        if (userStore?.user?.email) {
            console.log('userStore?.user?.email - ', userStore?.user?.email);
            basketGetByUser(userStore?.user?.email)
                .then(res => {
                    console.log('res - ', res);
                    setBasketData(res?.result);
                })
                .catch(error => {
                    console.error('Ошибка при получении данных:', error);
                });
        }
    };
    useEffect(() => {

        getProduct()

    }, [userStore?.user?.email])
    console.log('basketData - ', basketData)

    return (
        <div className={styles.container}>
            {/* TITLE  */}

            {/* FILTERS  */}
            <div className={styles.head}>
                <h1>Корзина</h1>
                {basketData && basketData?.length > 0 && (
                    <Button
                        onClick={() => toggleLoader()}
                        variant='primary'
                        href='/make-order'
                        className={styles.btn_sizes}
                    >
                        Перейти к оформлению
                    </Button>
                )}

            </div>
            {/* ITEMS  */}
            <div>
                {basketData && basketData?.length > 0 ? (
                    <ProductsBasketList
                        itemsInBase={basketData}
                        basketData={basketData}
                    // favoriteItem={favoriteItem}
                    />
                ) : (
                    // <ProductListSkeleton />
                    null
                )}
                {basketData?.length === 0 && (
                    <p className={styles.basket_empty_message}>
                        Упс, корзина пуста, скорее добавьте товары!
                    </p>
                )}
            </div>

            {/* RECOMMENDATION ITEMS TITLE  */}
            {/* <h2>Возможно вам понравится</h2> */}
            {/* RECOMMENDATION ITEMS  */}
            {/* <div>
                {true ? (
                    <ProductsList favoriteItem={favoriteItem} items={favoriteItems?.result?.items.slice(0, 5)} basketData={basketData} />
                ) : (
                    // <ProductListSkeleton />
                    null
                )}
            </div> */}
        </div>
    )
})

const filtersValues = [
    {
        label: 'Сначала новые',
        value: '0',
    },
    {
        label: 'Сначала старые',
        value: '1',
    },
    {
        label: 'Самые дешевые',
        value: '2',
    },
    {
        label: 'Самые дорогие',
        value: '3',
    },
]
