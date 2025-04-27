
import { OrderItemType } from '@/types/Order.types';
import { OrderItem } from './OrderItem';
import styles from './OrderListItems.module.scss';

interface OrderListItemsType {
	orderItems: any[];
	mutate?: () => void
}

export const OrderListItems = ({ orderItems, mutate }: OrderListItemsType) => {

	const customSort = (a: OrderItemType, b: OrderItemType) => {
		const order = [3, 4, 1, 2, 5];
		return order.indexOf(a.delivery_status) - order.indexOf(b.delivery_status);
	};

	const sortedOrderItems = [...orderItems].sort(customSort);
	console.log('sortedOrderItems - ', sortedOrderItems)
	return (
		<div className={styles.container}>
			{sortedOrderItems.map((item, i) => (
				<OrderItem item={item} key={i} mutate={mutate} />
			))}
		</div>
	);
};
