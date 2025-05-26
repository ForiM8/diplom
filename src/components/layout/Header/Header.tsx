'use client'

import { Section } from "../Section/Section"
import styles from './Header.module.scss'
import { redirect, usePathname } from "next/navigation"
import Camry from '../../../assets/images/camry.png'
import { HeaderSelectBar } from "./HeaderSelectBar/HeaderSelectBar"
import { SELECT_SERVICES } from "@/components/dataTime/dataTime"
import { Button } from "@/components/ui/button/Button"
import { Input } from "@/components/ui/input/Input"
import { ImageCustom } from "@/components/ui/ImageCustom"
import { useEffect } from "react"
import { useSession } from "next-auth/react"
import { observer } from "mobx-react-lite"
import { User } from "@/types/Order.types"

export const Header = observer((
    {
        user
    }: {
        user: User,
    }
) => {
    const pathname = usePathname();
    // const { data: session, status } = useSession();
    // let accessToken: any;

    // if (typeof window !== 'undefined') {
    //     accessToken = localStorage.getItem('token') || undefined;
    // }

    // console.log('accessToken - ', accessToken)
    // useEffect(() => {
    //     if (session?.user) {
    //         localStorage.setItem('token', session?.user?.accessToken)
    //         localStorage.setItem('email', session?.user?.email || '')
    //         userStore.setUser(session.user);
    //         userStore.setSessionStatus('authenticated');
    //     }
    // }, [session?.user]);

    const handleChangeFilter = (selectedFilter: {
        value: string
        label: string
    }) => {
        redirect(`/service/${selectedFilter.value}`)
    }
    // console.log('session?.user - ', session?.user)
    console.log('user - ', user)
    return (
        <>
            {pathname === '/' ? (
                <header className={styles.main_home}>
                    <Section>
                        <div className={styles.container_head}>
                            <div onClick={() => redirect(`/`)} className={styles.logo}></div>
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
                            {!user ? (
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
                            ) : (
                                <Button
                                    onClick={() => redirect(`/profile/settings`)}
                                    className={styles.btn_size}
                                    variant="blue">
                                    Профиль
                                </Button>
                            )}
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
                                <div className={styles.text}>Наш сайт поможет подобрать для вас лучший автомобиль
                                    и убережем от покупки хлама.</div>
                            </div>
                        </div>
                        <div className={styles.register_container}>
                            <div className={styles.register}>
                                <div className={styles.head}>Зарегестрируйтесь прямо сейчас быстро и легко</div>
                                <div className={styles.input_container}>
                                    <Input className={styles.input_size} placeholder={'Ваша почта *'} />
                                    <Input className={styles.input_size} placeholder={'Ваш пароль *'} />
                                    <Button
                                        className={styles.btn_size}
                                        variant="blue">
                                        Авторизоваться
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
                            <div onClick={() => redirect(`/`)} className={styles.logo}></div>
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
                            {!user ? (
                                <div className={styles.button_container}>
                                    <>
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
                                    </>
                                </div>
                            ) : (
                                <Button
                                    onClick={() => redirect(`/profile/settings`)}
                                    className={styles.btn_size}
                                    variant="blue">
                                    Профиль
                                </Button>
                            )}
                        </div>
                    </Section>
                </header>
            )}
        </>
    )
})
