"use client"

import styles from './ReviewsPage.module.scss'
import { Crumbs } from "@/components/crumbs/Crumbs"
import { REVIEWS_PAGE } from '@/components/dataTime/dataTime'
import { Section } from "@/components/layout/Section/Section"
import { ImageCustom } from '@/components/ui/ImageCustom'
import Star from '@/assets/images/star.png'

export const ReviewsPage = () => {
    return (
        <div className={styles.bg}>
            <Section>
                <div className={styles.main_container}>
                    <Crumbs span={'Блог'} />
                    <h1>Отзывы</h1>
                    <div className={styles.container}>
                        {REVIEWS_PAGE.map((item, i) => (
                            <div className={styles.block} key={i}>
                                <div className={styles.head}>
                                    <h2>{item.name}</h2>
                                    <div className={styles.rating}>
                                        {[...Array(item.rating)].map((_, index) => (
                                            <ImageCustom key={index} src={Star} classNameImg={styles.img} />
                                        ))}
                                    </div>
                                </div>
                                <div className={styles.head}>
                                    <h3>Последняя услуга: {item.name}</h3>
                                    <h3>Исполнитель: {item.master}</h3>
                                </div>
                                <div className={styles.text}>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    )
}