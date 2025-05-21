'use client'
import { useEffect, useState } from 'react'
import styles from './OrderListSection.module.scss'
import { ORDER_ITEMS } from '@/components/dataTime/dataTime'
import { Orders, OrderStatusEnum } from '@/types/Order.types'
import { OrderListItems } from '@/profile/order-list/OrderListItems'
import userStore from '@/stores/user/UserStores'
import { orderGetByUser } from '@/actions/order/order.actions'

export const OrderListSection = () => {
    // const [stageIsActive, setStageIsActive] = useState(0)

    // const [orderData, setOrderData] = useState<Orders[]>()
    // const getProduct = () => {
    //     if (userStore?.user?.email) {
    //         console.log('userStore?.user?.email - ', userStore?.user?.email);
    //         orderGetByUser(userStore?.user?.email)
    //             .then(res => {
    //                 console.log('res - ', res);
    //                 setOrderData(res?.result);
    //             })
    //             .catch(error => {
    //                 console.error('Ошибка при получении данных:', error);
    //             });
    //     }
    // };
    // useEffect(() => {
    //     getProduct()
    // }, [userStore?.user?.email])

    // const orderStage = [
    //     {
    //         title: 'Активные',
    //         component:
    //             <OrderListItems
    //                 orderItems={
    //                     orderData
    //                 }
    //             />

    //     },
    //     {
    //         title: 'Выполненные',
    //         component: (
    //             <OrderListItems
    //                 orderItems={
    //                     ORDER_ITEMS.filter((order) => order.delivery_status === OrderStatusEnum.Delivered) || []
    //                 }
    //             />
    //         ),
    //     },

    // ]

    return (
        <div className={styles.container}>
            {/* <h1>Твои заказы</h1>
            <nav className={styles.order_stage_navigation_container}>
                {orderStage.map((stage, i) => (
                    <p
                        onClick={() => setStageIsActive(i)}
                        style={{
                            color: stageIsActive === i ? 'black' : '#00000057',
                            cursor: stageIsActive === i ? '' : 'pointer',
                        }}
                        key={i}
                    >
                        {stage.title}
                        {i + 1 < orderStage.length && (
                            <span className={styles.nav_separator}></span>
                        )}
                    </p>
                ))}
            </nav>
            <div>{orderStage[stageIsActive].component}</div> */}
        </div>
    )
}
