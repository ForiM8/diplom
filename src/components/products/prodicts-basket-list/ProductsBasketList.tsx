
import clsx from 'clsx';
import styles from './ProductsBasketList.module.scss';
import { useCallback } from 'react';
import { ProductBasketCard } from '../product-basket-card/ProductBasketCard';
import { Order } from '@/types/Order.types';

interface ProductsListShoppingBagType {
    // items?: ProductInBasket[];
    itemsInBase?: Order[];
    basketData: Order[];
    // favoriteItem: ProductInFavorite[]
}

export const ProductsBasketList = ({
    // items,
    itemsInBase,
    basketData,
    // favoriteItem
}: ProductsListShoppingBagType) => {


    return (
        <div className={styles.listFavorites}>

            {itemsInBase ? itemsInBase.map((item, i) => (
                <ProductBasketCard
                    // className={clsx({ [styles.item_card]: i < 49 })}
                    key={i}
                    items={item}
                    itemsInBasked={basketData}
                // itemsInFavorite={favoriteItem}
                />
            )) : (
                null
            )}

        </div>
    );

};
// 