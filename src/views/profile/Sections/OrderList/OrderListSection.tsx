'use client'
import { useState } from 'react'
import styles from './OrderListSection.module.scss'
import { ORDER_ITEMS } from '@/components/dataTime/dataTime'
import { OrderStatusEnum } from '@/types/Order.types'
import { OrderListItems } from '@/profile/order-list/OrderListItems'

export const OrderListSection = () => {
    const [stageIsActive, setStageIsActive] = useState(0)

    const orderStage = [
        {
            title: 'Активные',
            component:
                <OrderListItems
                    orderItems={
                        ORDER_ITEMS?.filter(
                            (order) => order.delivery_status === OrderStatusEnum.New || order.delivery_status === OrderStatusEnum.InDelivery || order.delivery_status === OrderStatusEnum.ReadyToPickUp
                        ) || []
                    }
                />

        },
        {
            title: 'Выполненные',
            component: (
                <OrderListItems
                    orderItems={
                        ORDER_ITEMS.filter((order) => order.delivery_status === OrderStatusEnum.Delivered) || []
                    }
                />
            ),
        },

    ]

    return (
        <div className={styles.container}>
            <h1>Твои заказы</h1>
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
            <div>{orderStage[stageIsActive].component}</div>
        </div>
    )
}
