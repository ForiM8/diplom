'use client'

import { Section } from "../Section/Section"
import styles from './Header.module.scss'
import { Button } from "../ui/button/Button"
import { redirect, usePathname } from "next/navigation"
import Camry from '../../../assets/images/camry.png'
import { ImageCustom } from "../ui/ImageCustom"
import { Input } from "../ui/input/Input"
import { HeaderSelectBar } from "./HeaderSelectBar/HeaderSelectBar"
import { SELECT_SERVICES } from "@/components/dataTime/dataTime"

export const Header = () => {
    const pathname = usePathname();

    const handleChangeFilter = (selectedFilter: {
        value: string
        label: string
    }) => {
        redirect(`/service/${selectedFilter.value}`)
    }
    return (
        <>
            {pathname === '/' ? (
                <header className={styles.main_home}>
                    <Section>
                        <div className={styles.container_head}>
                            <div className={styles.logo}></div>
                            <div className={styles.text_container}>
                                <div className={styles.main_selects}>
                                    <HeaderSelectBar
                                        handleChangeFilter={handleChangeFilter}
                                        availableSortingTypes={SELECT_SERVICES}
                                    />
                                </div>
                                <a href="/reviews">Отзывы</a>
                                <a href="/blog">Блог</a>
                            </div>
                            <div className={styles.button_container}>
                                <Button
                                    onClick={() => redirect(`/auth`)}
                                    className={styles.btn_size}
                                    variant="border_blue">
                                    Вход
                                </Button>
                                <Button
                                    onClick={() => redirect(`/auth`)}
                                    className={styles.btn_size}
                                    variant="blue">
                                    Регистрация
                                </Button>
                            </div>
                        </div>
                        <div className={styles.main_container}>
                            <ImageCustom
                                classNameImg={styles.camry}
                                src={Camry}
                            />

                            <div className={styles.text_container}>
                                <div className={styles.head}>Автоподбор и выездная
                                    диагностика автомобилей
                                    в Барнауле и не только</div>
                                <div className={styles.text}>Наш сайт поможет поможет подобрать для вас лучший автомобиль
                                    и убережем от покупки хлама.</div>
                            </div>
                        </div>
                        <div className={styles.register_container}>
                            <div className={styles.register}>
                                <div className={styles.head}>Зарегестрируйтесь прямо сейчас быстро и легко</div>
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
                            <div className={styles.time}>
                                <p>В среднем на
                                    поиск уходит
                                    14 дней</p>
                            </div>
                        </div>
                    </Section>
                </header>
            ) : (
                <header className={styles.main}>
                    <Section>
                        <div className={styles.container}>
                            <div className={styles.logo}></div>
                            <div className={styles.text_container}>
                                <div className={styles.main_selects}>
                                    <HeaderSelectBar
                                        handleChangeFilter={handleChangeFilter}
                                        availableSortingTypes={SELECT_SERVICES}
                                    />
                                </div>
                                <a href="/reviews">Отзывы</a>
                                <a href="/blog">Блог</a>
                            </div>
                            <div className={styles.button_container}>
                                <Button
                                    onClick={() => redirect(`/auth`)}
                                    className={styles.btn_size}
                                    variant="border_blue">
                                    Вход
                                </Button>
                                <Button
                                    onClick={() => redirect(`/auth`)}
                                    className={styles.btn_size}
                                    variant="blue">
                                    Регистрация
                                </Button>
                            </div>
                        </div>
                    </Section>
                </header>
            )}
        </>
    )
}