"use client"

import BlogImg from '@/assets/images/blogImg.png'
import DateIcon from '@/assets/icons/dateIcon.png'
import Holder from '@/assets/icons/papochkaIcon.png'
import { Section } from "@/components/layout/Section/Section"
import styles from './BlogPage.module.scss'
import { Crumbs } from "@/components/crumbs/Crumbs"
import { ImageCustom } from '@/components/layout/ui/ImageCustom'
import { BLOG_BLOCK } from '@/components/dataTime/dataTime'
import { Button } from '@/components/layout/ui/button/Button'

export const Blog = () => {

    return (
        <div className={styles.bg}>
            <Section>
                <div className={styles.main_container}>

                    <Crumbs span={'Блог'} />

                    <h1>Блог</h1>

                    <div className={styles.container}>
                        <div className={styles.main}>
                            {BLOG_BLOCK.map((item, i) => (
                                <div className={styles.block} key={i}>
                                    <ImageCustom src={BlogImg} classNameImg={styles.img} />
                                    <div className={styles.main}>
                                        <div className={styles.settings}>
                                            <div className={styles.date}>
                                                <ImageCustom src={DateIcon} classNameImg={styles.img} />
                                                {item.date}
                                            </div>
                                            <div className={styles.date}>
                                                <ImageCustom src={Holder} classNameImg={styles.img} />
                                                Категория: {item.category}
                                            </div>
                                        </div>
                                        <h2>{item.title}</h2>
                                        <p>{item.text}</p>
                                        <Button
                                            className={styles.btn_size}
                                            variant="blue">
                                            Подробнее
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    )

}