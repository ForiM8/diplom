import { ImageCustom } from '@/components/ui/ImageCustom'
import { RxDotsHorizontal } from 'react-icons/rx'
import ItemImageTest from '../../../../assets/product-card/shapka.png'
import styles from './ArrangeOrderItem.module.scss'

interface ArrangeOrderItem {
	item: any
}

export const ArrangeOrderItem = ({ item }: ArrangeOrderItem) => {
	return (
		<div className={styles.container}>
			<div className={styles.order_info}>
				<h2>Приблизительная дата доставки: 10 ноября, доставим бесплатно</h2>
				<div className={styles.action_buttons}>
					<RxDotsHorizontal size={24} />
				</div>
			</div>
			<p className={styles.item_weight}>2 товара • 2.13 кг</p>
			<div className={styles.items_container}>
				{Array.from({ length: 5 }).map((_, i) => (
					<div key={i} className={styles.items_previews}>
						<ImageCustom
							className={styles.item_image}
							src={ItemImageTest}
							alt='item'
						/>
						<p>72 000 ₽</p>
					</div>
				))}
			</div>
			<p>Доставка: “Проспект Ленина, Дом 63, квартира 13”</p>
		</div>
	)
}
