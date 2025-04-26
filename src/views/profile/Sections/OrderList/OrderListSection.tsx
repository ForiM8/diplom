// 'use client'
// import { OrderGetAll } from '@/actions/orders/orders.action'
// import { OrderListItems } from '@/components/profile/order-list/OrderListItems'
// import { OrderResponse, OrderStatusEnum } from '@/types/Order.types'
// import { useState } from 'react'
// import useSWR, { SWRResponse } from 'swr'
// import styles from './OrderListSection.module.scss'
// import userStore from '@/stores/user/UserStore'
// import { observer } from 'mobx-react-lite'

// export const OrderListSection = observer(() => {

// 	const [stageIsActive, setStageIsActive] = useState(0)

// 	const fetcher = (url: string) => OrderGetAll(url)
// 	const { data: orderItems, isLoading, mutate }: SWRResponse<OrderResponse, any> =
// 		useSWR(
// 			userStore.sessionStatus === 'authenticated'
// 				? `${process.env.NEXT_PUBLIC_API_URL}/orders/user`
// 				: null,
// 			fetcher
// 		)

// 	console.log('orderItems', orderItems)

// 	if (userStore.sessionStatus !== 'authenticated' && userStore.sessionStatus !== 'loading') {
// 		return (
// 			<div className={styles.is_not_authorize_container}>
// 				<h1>
// 					<b>Вы не авторизованы</b>
// 				</h1>
// 				<p>
// 					Для доступа к списку заказов необходимо{' '}
// 					<a href={'/auth'}>
// 						<b>войти</b>
// 					</a>
// 				</p>
// 			</div>
// 		)
// 	}

// 	const orderStage = [
// 		{
// 			title: 'Активные',
// 			component: !isLoading ? (
// 				<OrderListItems
// 					orderItems={
// 						orderItems?.result.filter(
// 							(order) => order.delivery_status === OrderStatusEnum.New || order.delivery_status === OrderStatusEnum.InDelivery || order.delivery_status === OrderStatusEnum.ReadyToPickUp
// 						) || []
// 					}
// 					mutate={mutate}
// 				/>
// 			) : (
// 				'загрузка заказов...'
// 			),
// 		},
// 		{
// 			title: 'Завершенные',
// 			component: (
// 				<OrderListItems
// 					orderItems={
// 						orderItems?.result.filter((order) => order.delivery_status === OrderStatusEnum.Delivered) || []
// 					}
// 					mutate={mutate}
// 				/>
// 			),
// 		},

// 		{
// 			title: 'Список купленных товаров',
// 			component: (
// 				<div>
// 					<h1>Нет данных</h1>
// 				</div>
// 			),
// 		},
// 	]

// 	return (
// 		<div className={styles.container}>
// 			<h1>Твои заказы</h1>
// 			<nav className={styles.order_stage_navigation_container}>
// 				{orderStage.map((stage, i) => (
// 					<p
// 						onClick={() => setStageIsActive(i)}
// 						style={{
// 							color: stageIsActive === i ? 'black' : '#00000057',
// 							cursor: stageIsActive === i ? '' : 'pointer',
// 						}}
// 						key={i}
// 					>
// 						{stage.title}
// 						{i + 1 < orderStage.length && (
// 							<span className={styles.nav_separator}></span>
// 						)}
// 					</p>
// 				))}
// 			</nav>
// 			<div>{orderStage[stageIsActive].component}</div>
// 		</div>
// 	)
// })
