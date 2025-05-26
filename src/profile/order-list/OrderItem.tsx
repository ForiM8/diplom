'use client'
import { Slider } from '@/components/slider/Slider'
import { ImageCustom } from '@/components/ui/ImageCustom'
import { formatCurrencyRub } from '@/utils/formatCurrencyRub'
import clsx from 'clsx'
import { useMemo } from 'react'
import styles from './OrderItem.module.scss'
import Trash from '@/assets/images/trash.png'
import { Button } from '@/components/ui/button/Button'
import { toast } from 'react-toastify'
import { DeliveryMethodEnumEn, Order, OrderStatusEnum } from '@/types/Order.types'
import { orderDeleteById } from '@/actions/order/order.actions'

interface OrdersItemType {
	item: Order
	mutate?: () => void
}

const DELIVERY_METHOD = [
	{
		delivery_method: DeliveryMethodEnumEn.pickup,
		value: 'Самовывоз'
	},
	{
		delivery_method: DeliveryMethodEnumEn.shipping,
		value: 'Доставка'
	},
]

export const OrderItem = ({ item, mutate }: OrdersItemType) => {
	const deliveryInfo = [
		{
			status: OrderStatusEnum.New,
			delivery_method: DeliveryMethodEnumEn.pickup,
			value: 'В сборке'
		},
		{
			status: OrderStatusEnum.InDelivery,
			delivery_method: DeliveryMethodEnumEn.pickup,
			value: 'В работе'
		},
		{
			status: OrderStatusEnum.ReadyToPickUp,
			delivery_method: DeliveryMethodEnumEn.pickup,
			value: 'Готов к выдаче'
		},
		{
			status: OrderStatusEnum.Delivered,
			delivery_method: DeliveryMethodEnumEn.pickup,
			value: `Доставлен`
		},
		{
			status: OrderStatusEnum.Canceled,
			delivery_method: DeliveryMethodEnumEn.pickup,
			value: `Отменен`
		},
		{
			status: OrderStatusEnum.New,
			delivery_method: DeliveryMethodEnumEn.shipping,
			value: 'Новый'
		},
		{
			status: OrderStatusEnum.InDelivery,
			delivery_method: DeliveryMethodEnumEn.shipping,
			value: 'В работе'
		},
		{
			status: OrderStatusEnum.ReadyToPickUp,
			delivery_method: DeliveryMethodEnumEn.shipping,
			value: 'Готов к выдаче'
		},
		{
			status: OrderStatusEnum.Delivered,
			delivery_method: DeliveryMethodEnumEn.shipping,
			value: `Доставлен`
		},
		{
			status: OrderStatusEnum.Canceled,
			delivery_method: DeliveryMethodEnumEn.shipping,
			value: `Отменен`
		},
	]
	const totalPrice = useMemo(() => {
		let total = item.item[0].item.price
		return Number(total)
	}, [item])

	return (
		<div className={styles.container}>
			<div className={styles.order_info}>
				<div className={styles.container_head}>
					<div className={styles.head}>
						<h1 className={styles.date_delivery}>
							Заказ от {item?.data ? item?.data?.slice(0, 10) : 'нет данных'}
						</h1>

					</div>
				</div>
				<div className={styles.price_info}>
					<p className={styles.price}>{formatCurrencyRub(totalPrice)}</p>
					{/* <p className={styles.pay_type}>{OrderPaymentMethodEnumRu[item.payment_method]}</p> */}
				</div>
			</div>
			<div className={styles.status}>
				<div className={styles.container_status}>
					<div
						className={clsx(styles.status_title, {

							[styles.bg_green]: 1 === 1

						})}
					>
						В работе
					</div>


					{/* <div
					className={clsx(styles.status_title, {
						[styles.bg_blue]: item?.delivery_status === 2,
						[styles.bg_gray]: item?.delivery_status === 1,
						[styles.bg_green]: item?.delivery_status === 3,
					})}
				>
					{item?.delivery_status === 1
						? 'Заказ на рассмотрении'
						: item.delivery_status === 2
							? 'В пути'
							: item.delivery_status === OrderStatusEnum.Delivered ? `Доставлен ${item.date_delivery ? item.date_delivery.slice(0, 10) : null}`
								: ''}
				</div> */}
					<div className={styles.info}>
						<p>i</p>
					</div>
				</div>

				<Button
					onClick={() => orderDeleteById(item._id)}
					className={styles.trash}
				>
					{/* <ImageCustom
						className='w-[25px] h-[25px]'
						src={Trash}
					/> */}
					Отменить
				</Button>
			</div>
			<div className={styles.order_items}>
				<div className={styles.order_items_list}>
					<Slider
						settings={{ slidesPerView: 'auto', spaceBetween: 20 }}
						arrowNext={false}
						arrowPrev={false}
						items={[
							...item?.item?.map((item, i) => (
								<div className={styles.order_item} key={i}>
									<a href={`/product/${item.item._id}`}>
										<img
											className={styles.item_image}
											src={item?.item.images[0]?.image}
											alt={item.item.title}
										/>
										<div className={styles.item_count_prices_info}>
											<p>{formatCurrencyRub(Number(item.item.price))}</p>
										</div>
									</a>
									<a href={`/product/${item.item._id}`}>
										<p title={item.item.title} className={styles.item_name}>
											{item.item.title.length > 20
												? `${item.item.title.slice(0, 17)}...`
												: item.item.title}
										</p>
									</a>
								</div>
							)),
						]}
					/>
				</div>
				{/* <p className={styles.delivery_time}>
					Время доставки 12 ноября с 10:00 до 14:00
				</p> */}
			</div>


		</div>
	)
}
