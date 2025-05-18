
import { OrderItemType, Orders } from '@/types/Order.types';
import { OrderItem } from './OrderItem';
import styles from './OrderListItems.module.scss';

interface OrderListItemsType {
	orderItems: Orders[] | undefined;
	mutate?: () => void
}

export const OrderListItems = ({ orderItems, mutate }: OrderListItemsType) => {


	return (
		<div className={styles.container}>
			{orderItems?.map((item, i) => (
				<OrderItem item={item} key={i} mutate={mutate} />
			))}
		</div>
	);
};
