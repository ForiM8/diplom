"use client"

import BlogImg from '@/assets/images/blogImg.png'
import DateIcon from '@/assets/icons/dateIcon.png'
import Holder from '@/assets/icons/papochkaIcon.png'
import { Section } from "@/components/layout/Section/Section"
import styles from './BlogPage.module.scss'
import { Crumbs } from "@/components/crumbs/Crumbs"
import { ImageCustom } from '@/components/layout/ui/ImageCustom'
import { BLOG_BLOCK, SERVICES } from '@/components/dataTime/dataTime'
import { Button } from '@/components/layout/ui/button/Button'
import { Input } from '@/components/layout/ui/input/Input'

export const BlogPage = () => {

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
                        <div className={styles.mini_info}>
                            <h2>Наши услуги</h2>
                            <div className={styles.services}>
                                {SERVICES.map((elem, i) => (
                                    <a href='#' key={i}>{elem.title}</a>
                                ))}
                            </div>
                            <h2>Свежие записи</h2>
                            <div className={styles.new_blog}>
                                {BLOG_BLOCK.map((elem, i) => {
                                    if (i < 2)
                                        return (
                                            <div className={styles.block} key={i}>
                                                <ImageCustom src={BlogImg} classNameImg={styles.img} />
                                                <div className={styles.text}>
                                                    <p>{elem.title}</p>
                                                    <p>{elem.date}</p>
                                                </div>
                                            </div>
                                        )
                                })}
                            </div>
                            <div className={styles.register}>
                                <h2>Закажите автоподбор от
                                    профессионалов прямо
                                    сейчас!</h2>
                                <div className={styles.input_container}>
                                    <Input className={styles.input_size} placeholder={'Ваше имя *'} />
                                    <Input className={styles.input_size} placeholder={'Ваш телефон *'} />
                                    <Button
                                        className={styles.btn_size}
                                        variant="blue">
                                        Регистрация
                                    </Button>
                                </div>
                                <div className={styles.text_container}>
                                    <input className={styles.checkbox} type='checkbox' />
                                    <p>Даю согласие на обработку персональных данных в соответствии с <span>политикой конфиденциальности</span> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    )

}