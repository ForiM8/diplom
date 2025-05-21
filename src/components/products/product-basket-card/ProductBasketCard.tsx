'use client'
// import { basketEdit, basketRemove } from '@/actions/basket/basket.action'
// import { NoAuthorizationModal } from '@/components/modals/NoAuthorizationModal/NoAuthorizationModal'
import { Button } from '@/components/ui/button/Button'
import { ImageCustom } from '@/components/ui/ImageCustom'
// import { Product, ProductEdit, ProductInBasket, ProductInFavorite, ProductInResult } from '@/types/Product.types'
import { formatCurrencyRub } from '@/utils/formatCurrencyRub'
import clsx from 'clsx'
import { useSession } from 'next-auth/react'
import { FC, useEffect, useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import styles from './ProductBasketCard.module.scss'
// import { basketDataStore } from '@/stores/basket/BasketStore'
import { observer } from 'mobx-react-lite'
import { Minus, Plus } from 'lucide-react'
import HeartBlackBorder from '@/assets/images/heart2.png'
import HeartRed from '@/assets/images/heartRed3.png'
// import { favoritesDataStore } from '@/stores/favorites/favoritesStore'
// import useAddFavorite from '@/components/hooks/favorites/use-add-favorites'
// import useDeleteFavorite from '@/components/hooks/favorites/use-delete-favorites'
// import { getLocation } from '@/utils/getLocation'
// import { cityDataStore } from '@/stores/city/CityStores'
// import { useCalculateDateToDelivery } from '@/components/hooks/calculate-date-to-delivery/use-calculate-date-to-delivery'
import { toast } from 'react-toastify'
import userStore from '@/stores/user/UserStores'
import { Orders } from '@/types/Order.types'
// 
type Props = {
    items: Orders
    itemsInBasked?: Orders[]
    // itemsInFavorite?: ProductInFavorite[]
}

export const ProductBasketCard: FC<Props> = observer(({ items, itemsInBasked }) => {
    const item = items.item
    const [isUnauthorization, setIsUnauthorization] = useState(false)
    const [isAction, setIsAction] = useState(false)
    const isInBasked = itemsInBasked?.find(
        (itemInBasked) => itemInBasked.item._id === item._id
    )
    // const isInFavorite = itemsInFavorite?.find(
    //     (itemsInFavorite) => itemsInFavorite.id === item.id
    // )
    // const { dataCity } = cityDataStore
    const [location, setLocation] = useState<any>(null)
    const [basket, setBasket] = useState<Orders[]>([])
    const [favorite, setFavorite] = useState<Orders[]>([])
    const [count, setCount] = useState(false)
    const [countFavorite, setCountFavorite] = useState(false)
    // const { data, setBasketData } = basketDataStore
    // const { dataFavorites, setFavoritesData } = favoritesDataStore
    const [dateTime, setDateTime] = useState<number>()
    // const { dataLogin } = loginDataStore
    // const syncLocalBasketWithServer = async () => {
    // 	const basket: ProductInBasket[] = JSON.parse(localStorage.getItem('basket') || '[]');
    // 	console.log('basket - ', basket)
    // 	if (basket.length > 0) {
    // 		for (const item of basket) {
    // 			const data = {
    // 				item_id: item.id,
    // 				count: item.count
    // 			};
    // 			console.log('data - ', data)
    // 			await basketEdit(data);
    // 		}
    // 		localStorage.removeItem('basket');
    // 	}

    // };

    // useEffect(() => {
    // 	syncLocalBasketWithServer();
    // }, [dataLogin.email]);
    const getBarnaulTime = () => {
        return new Intl.DateTimeFormat('ru-RU', {
            timeZone: 'Asia/Barnaul',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        }).format(new Date());
    };

    // useEffect(() => {
    //     const getLocal = async () => {
    //         const loc = await getLocation();
    //         setLocation(loc);
    //     };

    //     const barnaulTime = getBarnaulTime();
    //     const [, timePart] = barnaulTime.split(', ');
    //     const [hours, minutes] = timePart.split(':');
    //     let result = hours + minutes;
    //     setDateTime(Number(result));

    //     getLocal();
    // }, [dataCity]);

    useEffect(() => {
        setBasket(JSON.parse(localStorage.getItem('basket') || '[]'))
        setBasket((elem) => elem.filter(elem => elem._id === item._id))
    }, [count])

    useEffect(() => {
        setFavorite(JSON.parse(localStorage.getItem('favorite') || '[]'))
        setFavorite((elem) => elem.filter(elem => elem._id === item._id))
    }, [countFavorite])

    // const { addDataInFavorite } = useAddFavorite();
    // const { deleteDataInFavorite } = useDeleteFavorite();

    // const { calculateDate } = useCalculateDateToDelivery()

    // const addDataInBasketLocalStorage = (data: ProductInBasket) => {
    //     if (!userStore?.user?.email) {
    //         const basket: ProductInBasket[] = JSON.parse(localStorage.getItem('basket') || '[]');
    //         let existingItemIndex = basket.findIndex(item => item.id === data.id);
    //         if (data.count === 0) {
    //             if (existingItemIndex !== -1) {
    //                 basket.splice(existingItemIndex, 1);
    //             }
    //         } else {
    //             if (existingItemIndex !== -1) {
    //                 basket[existingItemIndex] = data;
    //             } else {
    //                 basket.push(data);
    //             }

    //         }
    //         localStorage.setItem('basket', JSON.stringify(basket));
    //         setBasketData({ count: data.count })
    //         setBasket(basket)
    //         setCount(prev => !prev)
    //     }
    // }


    // const addDataInBasket = (data: any) => {
    //     console.log('dataInBasket - ', data);
    //     console.log('data gg - ', data)
    //     if (
    //         data.count <= data.amount && data.show_if_no_count === true
    //         || data.count <= data.amount && data.show_if_no_count === false
    //         || Number.isNaN(data.count)
    //         || data.show_if_no_count === true && data.amount === 0
    //     ) {
    //         if (!userStore?.user?.email) {
    //             addDataInBasketLocalStorage(data);
    //         } else {
    //             const setData = {
    //                 item_id: data.id,
    //                 count: data.count
    //             };
    //             handleBasketEdit(setData);
    //         }
    //     } else {
    //         toast.info(
    //             `На складе всего ${data.amount} шт`
    //         );
    //     }
    // };


    // const handleBasketEdit = async (data: ProductEdit) => {
    //     if (Number.isNaN(data.count)) {
    //         await basketRemove(data.item_id);
    //         setTimeout(() => {
    //             setIsAction(false)
    //         }, 100)

    //     } else {
    //         setIsAction(true)
    //         await basketEdit(data)
    //         setTimeout(() => {
    //             setIsAction(false)
    //         }, 100)
    //     }

    // }


    return (
        <div className={styles.product_card}>
            {/* {isInFavorite || favorite[0]?.id ? (
                <Button
                    onClick={() => deleteDataInFavorite({
                        id: item.id, count: 1, name: item.name, slug: item.slug,
                        price: item.price, description: item.description, images: item.images[0].path
                    })}
                    variant='inFavoriteMain'
                    className={styles.favorite}
                >
                    <ImageCustom className='w-[25px] h-[25px]' src={HeartRed} />
                </Button>
            ) : (
                <Button
                    onClick={() => addDataInFavorite({
                        id: item.id, count: 1, name: item.name, slug: item.slug,
                        price: item.price, description: item.description, images: item.images[0].path, amount: item.amount
                    })}
                    variant='inFavoriteMain'
                    className={styles.favorite}
                >
                    <ImageCustom className='w-[25px] h-[25px]' src={HeartBlackBorder} />
                </Button>
            )} */}
            <div className={styles.image_container}>

                <a href={`/product/${item._id}`}>
                    {item.images.length ? (
                        <img
                            onClick={() => setIsAction(true)}
                            className={styles.image}
                            src={`${item.images[0].image}`}
                            alt='product-image'
                        />
                    ) : (
                        <div className='w-[200px] h-[220px] rounded-[8px] bg-[#ebebeb] animate-pulse'></div>
                    )}
                </a>
                {/* ТЕСТОВЫЕ ДАННЫЕ  */}
                {/* <span>- {countSale(item.price)[1]}%</span> */}
            </div>
            <div className={styles.item_info}>
                <div className={styles.main_text}>
                    <div className={styles.prices}>
                        <span className={styles.sale_price}>
                            {formatCurrencyRub(Number(item.price))}
                        </span>
                        {/* <s className={styles.price}>{countSale(item.price)[0]}</s> */}
                    </div>
                    <a href={`/product/${item._id}`}>

                        <p title={item.title} className={styles.title}>{`${item.title}`}</p>
                    </a>
                    {/* {item.amount > 0 && (<p className={styles.text_red}>Осталось {item.amount} шт</p>)} */}

                </div>
                <div>

                </div>
            </div>
            <div
                className={clsx([
                    styles.action,
                    {
                        [styles.start]: isAction,
                        [styles.stop]: !isAction,
                    },
                ])}
            >
                <AiOutlineLoading3Quarters
                    className={clsx([styles.load_circle])}
                    size={30}
                />
            </div>
            {/* <NoAuthorizationModal
                isShow={isUnauthorization}
                setIsShow={setIsUnauthorization}
            /> */}
        </div>
    )
})
