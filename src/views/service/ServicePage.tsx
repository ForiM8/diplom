"use client"

import { Crumbs } from '@/components/crumbs/Crumbs'
import styles from './ServicePage.module.scss'
import { Section } from "@/components/layout/Section/Section"
import { ImageCustom } from '@/components/ui/ImageCustom'
import { SERVICE_BLOCK, SERVICES } from '@/components/dataTime/dataTime'
import { Button } from '@/components/ui/button/Button'
import People from '@/assets/images//heart_border_black.png'
import Star from '@/assets/images/star.png'
import { useRouter } from 'next/navigation'
import { removeTags } from '@/utils/removeTags'
import userStore from '@/stores/user/UserStores'
import { basketCreate } from '@/actions/basket/basket.action'
import { Product } from '@/types/Product.types'
import { favoriteCreate } from '@/actions/favorite/favorite.action'
import { Orders } from '@/types/Order.types'
import { useEffect, useState } from 'react'

interface Category {
    _id: string;
    id: number;
    title: string;
    price: number;
    icon: string;
    slug: string;
}

export const ServicePage = ({ productData, categoryData, favoriteData, basketData }: { productData: any[], categoryData: Category, favoriteData: Orders[], basketData: Orders[] }) => {
    console.log('categoryData - ', categoryData)
    const router = useRouter()
    const [favoriteDataByUser, setFavoriteDataByUser] = useState<Orders[]>()
    const [basketDataByUser, setBasketDataByUser] = useState<Orders[]>()
    useEffect(() => {
        setFavoriteDataByUser(favoriteData.filter((elem) => elem.customer._id !== userStore?.user?._id))
    }, [favoriteData])
    useEffect(() => {
        setBasketDataByUser(basketData.filter((elem) => elem.customer._id !== userStore?.user?._id))
    }, [basketData])
    const getBarnaulTime = () => {
        return new Intl.DateTimeFormat('ru-RU', {
            timeZone: 'Asia/Barnaul',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        }).format(new Date())
    }
    const HandleBasketAdd = (item: Product) => {
        const dataOrder = {
            item: item,
            customer: userStore?.user,
            data: getBarnaulTime()
        }
        const result = basketCreate(dataOrder)
        console.log('result - ', result)
    }
    const HandleFavoriteAdd = async (item: Product) => {
        const dataOrder = {
            item: item,
            customer: userStore?.user,
            data: getBarnaulTime()
        }
        const result = await favoriteCreate(dataOrder)
        console.log('result - ', result)
    }
    return (
        <div className={styles.bg}>
            <Section>
                <div className={styles.main_container}>

                    <Crumbs span={'Услуги'} slug={categoryData?.title} />

                    <h1>{categoryData?.title}</h1>

                    <div className={styles.container}>
                        <h2>Цены на автоподбор легковых автомобилей</h2>
                        <div className={styles.service_container}>
                            {productData?.map((elem, i) => {
                                return (
                                    <div className={styles.service_block} key={i}>
                                        {/* <ImageCustom
                                            classNameImg={styles.img}
                                            src={elem.image}
                                        /> */}

                                        <img className={styles.img} src={elem.images[0].image} alt="" />
                                        <div className={styles.service_block}>
                                            <div className={styles.text_container}>
                                                <div className={styles.head}>
                                                    <h3 onClick={() => router.replace(`/product/${elem._id}`)}>{elem.title}</h3>
                                                    {/* <Button
                                                        className={styles.btn_size}
                                                        variant="inFavorite"> */}
                                                    {favoriteDataByUser && favoriteDataByUser?.some((favorite) => favorite.item._id === elem._id) ? (
                                                        <div>уже в избранном</div>
                                                    ) : (<ImageCustom
                                                        onClick={() => HandleFavoriteAdd(elem)}
                                                        classNameImg={styles.img}
                                                        src={People}
                                                    />)}

                                                    {/* </Button> */}
                                                </div>
                                                <div className={styles.service}>
                                                    <p className={styles.price}>{elem.title}</p>
                                                    <p >{elem.price}</p>
                                                </div>
                                                {removeTags(`${elem.description.slice(
                                                    0, 900
                                                )}...`)}
                                            </div>
                                        </div>
                                        <div className={styles.master_info}>
                                            <div className={styles.main}>
                                                <p className={styles.name}>{elem.user.name}</p>
                                                <div className={styles.rating}>
                                                    <div className={styles.stars_container}>
                                                        <p>{elem.rating}</p>
                                                        <div className={styles.stars}>
                                                            {[...Array(5)].map((_, index) => (
                                                                <ImageCustom key={index} src={Star} classNameImg={styles.img} />
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <p>{elem.reviews ? elem.reviews : 'нет'} отзывов</p>
                                                </div>
                                                <p className={styles.document}>Документы проверены</p>
                                            </div>
                                            <div className={styles.price_container}>
                                                <p><span>Цена: </span>{elem.price}</p>
                                                {basketDataByUser && basketDataByUser?.some((basket) => basket.item._id === elem._id) ? (
                                                    <div>уже в корзине</div>
                                                ) : (
                                                    <Button
                                                        onClick={() => HandleBasketAdd(elem)}
                                                        className={styles.btn_size}
                                                        variant='blue'>
                                                        В корзину
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    )
}