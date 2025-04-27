import { ArrangeOrderItem } from '../arrange-order-item/ArrangeOrderItem'
import styles from './ArrangeOrderList.module.scss'

interface ArrangeOrderListType {
	items: any[]
}

export const ArrangeOrderList = ({ items }: ArrangeOrderListType) => {
	return (
		<div className={styles.container}>
			{items.map((item, i) => (
				<ArrangeOrderItem key={i} item={item} />
			))}
		</div>
	)
}
