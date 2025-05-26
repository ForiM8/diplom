'use client'
import { useEffect, useState } from 'react'
import styles from './OrderListSection.module.scss'
import { OrderListItems } from '@/profile/order-list/OrderListItems'
import { orderGetByUser } from '@/actions/order/order.actions'
import { Order, OrderStatusEnum } from '@/types/Order.types'
import { observer } from 'mobx-react-lite'
import { useSession } from 'next-auth/react'

export const OrderListSection = ({ orderData }: { orderData: Order[] | undefined }) => {
    const [stageIsActive, setStageIsActive] = useState(0)

    console.log('orderData in OrderListSection - ', orderData)

    const orderStage = [
        {
            title: 'Активные',
            component:
                <OrderListItems
                    orderItems={
                        orderData?.filter((order) => order.status === OrderStatusEnum.New) || []
                    }
                />

        },
        {
            title: 'Выполненные',
            component: (
                <OrderListItems
                    orderItems={
                        orderData?.filter((order) => order.status === OrderStatusEnum.New) || []
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
