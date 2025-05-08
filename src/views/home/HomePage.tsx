'use client'

import { Section } from "@/components/layout/Section/Section"
import styles from './HomePage.module.scss'
import { ImageCustom } from "@/components/ui/ImageCustom"
import Two_mens from '@/assets/images/two_mens.jpg'
import Galka from '@/assets/images/why_needed_galka.jpg'
import Danger from '@/assets/images/danger.png'
import Bmw from '@/assets/images/bmw.jpg'
import { ABOUT, QUESTIONS, REVIEWS, RISKS, SELECTED_CARS, SERVICES, WHY_CHECKED, WHY_NEEDED, WORKS_SCHEME } from "@/components/dataTime/dataTime"
import { Slider } from "@/components/slider/Slider"
import { Button } from "@/components/ui/button/Button"
import Icn1 from '@/assets/images/icn1.png'

export const HomePage = ({ categoryData }: { categoryData: any }) => {

    return (
        <>
            <Section>
                <div className={styles.about_us}>
                    {ABOUT.map((elem) => {
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
                        {categoryData?.map((elem: any) => {
                            return (
                                <div className={styles.service_block} key={elem.id}>
                                    <p className={styles.price}>{elem.price}</p>
                                    <h3>{elem.title}</h3>
                                    <a href={`/service/${elem.slug}`}>Перейти к предложениям</a>
                                    <img
                                        className={styles.img}
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
                        {WHY_NEEDED.map((elem) => {
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
                        {WHY_CHECKED.map((elem) =>
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
                        {RISKS.map((elem) => {
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

                <div className={styles.selectedCars}>
                    <h2>Подобранные автомобили</h2>
                    <div className={styles.containerSlider}>
                        <Slider
                            settings={{ slidesPerView: 1, spaceBetween: 20 }}
                            arrowNext={false}
                            arrowPrev={false}
                            items={[
                                SELECTED_CARS
                                    .map((item: any, i: number) => (
                                        <div className={styles.block} key={i}>
                                            <ImageCustom
                                                classNameImg={styles.img}
                                                src={Bmw}
                                            />
                                            <div className={styles.title}>{item.description}</div>
                                            <div className={styles.description}>
                                                <p>Пробег:{item.mileage}</p>
                                                <p>Цена:{item.price}</p>
                                            </div>
                                        </div>
                                    )),
                            ]}
                            pagination
                        />
                    </div>
                </div>

                <div className={styles.workScheme}>
                    <h2>Схема нашей работы</h2>
                    <div className={styles.list}>
                        {WORKS_SCHEME.map((item: any, index: any) =>
                            item && (
                                <div key={index}>
                                    <h4>{item.title}</h4>
                                    <p>{item.text}</p>
                                </div>
                            )
                        )
                        }
                    </div>
                </div>

                <div className={styles.reviews}>
                    <h2>Отзывы</h2>
                    <div className={styles.containerSlider}>
                        <Slider
                            settings={{ slidesPerView: 1, spaceBetween: 20 }}
                            arrowNext={false}
                            arrowPrev={false}
                            items={[
                                REVIEWS
                                    .map((item: any, i: number) => (
                                        <div className={styles.block} key={i}>
                                            <ImageCustom
                                                classNameImg={styles.img}
                                                src={Bmw}
                                            />
                                            <div className={styles.textContainer}>
                                                <p className={styles.date}>{item.date}</p>
                                                <h4>{item.title}</h4>
                                                <p className={styles.car}>{item.car}</p>
                                                <p>{item.text}</p>
                                                <Button
                                                    className={styles.btn_size}
                                                    variant="border_blue">
                                                    Отзыв полностью
                                                </Button>
                                            </div>
                                        </div>
                                    )),
                            ]}
                            pagination
                        />
                    </div>
                </div>

                <div className={styles.questions}>
                    <h2>Часто задаваемые вопросы</h2>
                    {QUESTIONS.map((item: any, i: number) =>
                        <div className={styles.block} key={i}>
                            <p>{item.question}</p>
                            <Button
                                className={styles.btn_size}
                                variant="plus">
                            </Button>
                        </div>
                    )}
                </div>
            </Section >
        </>
    )
}

