'use client'

import { Section } from "@/components/layout/Section/Section"
import styles from './HomePage.module.scss'
import { ImageCustom } from "@/components/layout/ui/ImageCustom"
import Two_mens from '@/assets/images/two_mens.jpg'
import Galka from '@/assets/images/why_needed_galka.jpg'
import Danger from '@/assets/images/danger.png'
import { about, risks, services, why_checked, why_needed } from "@/components/dataTime/dataTime"

export const HomePage = () => {

    return (
        <>
            <Section>
                <div className={styles.about_us}>
                    {about.map((elem) => {
                        return (
                            <div className={styles.about} key={elem.id}>
                                <p className={styles.head}>{elem.title}</p>
                                <p className={styles.text}>{elem.href}</p>
                            </div>
                        )
                    })}
                </div>
                <div className={styles.description}>
                    <div className={styles.image}>
                        <ImageCustom
                            classNameImg={styles.img}
                            src={Two_mens}
                        />
                        <div className={styles.years}>
                            <div className={styles.bracket}></div>
                            <div className={styles.text_container}>
                                <p className={styles.text}>Более</p>
                                <p className={styles.text_big}>12</p>
                                <p className={styles.text}>лет</p>
                                <p className={styles.text}>опыта</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.text_container}>
                        <div className={styles.text_blue}>
                            <div className={styles.line}></div>
                            Компания Авто Выбор
                        </div>
                        <div className={styles.head}>
                            Профессиональный
                            автоподбор
                        </div>
                        <div className={styles.text}>
                            Компания Авто Эксперт уже 11 лет осуществляет выездную диагностику и автоподбор.
                            Мы ежедневно спасаем своих клиентов от покупки автохлама. За все время у
                            нас не было ни одного недовольного заказчика.
                        </div>
                        <div className={styles.text}>Рынок поддержанных автомобилей предлагает несколько десятков тысяч
                            машин различных марок и годов выпуска. Выбрать хороший автомобиль с пробегом не так
                            просто. Поиск может быть долгим, а выбор ‒ рискованным. Зачастую продавцы не знают
                            точных характеристик авто или скрывают информацию о реальном состоянии продаваемой
                            машины.</div>
                        <div className={styles.text}>Наша работа — подбор авто под ключ. С клиентом заключаем
                            официальный договор. Для
                            экспертизы используем только профессиональное оборудование.</div>
                    </div>
                </div>

                <div className={styles.our_services}>
                    <h2>Наши услуги</h2>
                    <div className={styles.service_container}>
                        {services.map((elem) => {
                            return (
                                <div className={styles.service_block} key={elem.id}>
                                    <p className={styles.price}>{elem.price}</p>
                                    <h3>{elem.title}</h3>
                                    <a>Перейти к предложениям</a>
                                    <ImageCustom
                                        classNameImg={styles.img}
                                        src={elem.icon}
                                    />
                                </div>
                            )
                        })}
                    </div>

                </div>

                <div className={styles.why_needed}>
                    <h2>Зачем нужен автоподбор</h2>
                    <div className={styles.container}>
                        {why_needed.map((elem) => {
                            return (
                                <div className={styles.block} key={elem.id}>
                                    <ImageCustom
                                        classNameImg={styles.img}
                                        src={Galka}
                                    />
                                    <div className={styles.text_container}>
                                        <p className={styles.head}>{elem.title}</p>
                                        <p className={styles.text}>{elem.text}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className={styles.why_checked}>
                    <h2>Что необходимо проверить в автомобиле?</h2>
                    <div className={styles.container}>
                        {why_checked.map((elem) =>
                            elem.id % 2 === 0 ? (
                                <div className={styles.right} key={elem.id}>
                                    <div className={styles.line_container}>
                                        <div className={styles.dot}></div>
                                        <div className={styles.line}></div>
                                    </div>
                                    <div className={styles.text}>
                                        <h3>{elem.title}</h3>
                                        <p>{elem.text}</p>
                                    </div>

                                </div>
                            ) : (
                                <div className={styles.left} key={elem.id}>
                                    <div className={styles.text}>
                                        <h3>{elem.title}</h3>
                                        <p>{elem.text}</p>
                                    </div>
                                    <div className={styles.line_container}>
                                        <div className={styles.line}></div>
                                        <div className={styles.dot}></div>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>

                <div className={styles.risks}>
                    <h2>Риски самостоятельной покупки
                        автомобиля</h2>
                    <div className={styles.container}>
                        {risks.map((elem) => {
                            return (
                                <div className={styles.block} key={elem.id}>
                                    <ImageCustom
                                        classNameImg={styles.img}
                                        src={Danger}
                                    />
                                    <div className={styles.text}>
                                        <h4>{elem.title}</h4>
                                        <p>{elem.text}</p>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </Section >
        </>
    )
}

