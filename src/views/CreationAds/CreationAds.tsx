'use client'
import { Section } from '@/components/layout/Section/Section'
import styles from './CreationAds.module.scss'
import { Input } from '@/components/ui/input/Input'

const CATEGORY_DATA = [
    {
        id: 1,
        name: 'Автоподбор легковых автомобилей'
    },
    {
        id: 2,
        name: 'Автоподбор грузовых ТС'
    },
    {
        id: 3,
        name: 'Выездная диагностика автомобилей'
    },
    {
        id: 4,
        name: 'Выездная диагностика грузовых ТС'
    },
    {
        id: 5,
        name: 'Сопровождение сделок'
    },
    {
        id: 6,
        name: 'Автоподбор мототехники'
    }
]

export const CreationAds = () => {
    return (
        <div className={styles.bg}>
            <Section>
                <div className={styles.container}>
                    <h1>Новое объявление</h1>
                    <div className={styles.main}>
                        <h2>
                            Подробности
                        </h2>
                        <div className={styles.block}>
                            <h3>Выберите категорию</h3>

                            <div className={styles.category_container}>
                                {CATEGORY_DATA.map((elem, i) => {
                                    return (
                                        <div className={styles.category} key={i}>
                                            {elem.name}
                                        </div>
                                    )
                                })}
                            </div>
                            <div className={styles.block}>
                                <h3>Название услуги</h3>
                                <div className={styles.input_container}>
                                    <Input
                                        className={styles.input}
                                        type='password'
                                        variant='formAds'
                                        placeholder='Введите название услуги...'
                                    />
                                </div>
                            </div>
                            <div className={styles.block}>
                                <h3>Описание услуги</h3>
                                <div className={styles.input_container}>
                                    <Input
                                        className={styles.input}
                                        type='password'
                                        variant='formAds'
                                        placeholder='Введите описание услуги...'
                                    />
                                </div>
                            </div>
                            <div className={styles.block}>
                                <h3>Цена услуги</h3>
                                <div className={styles.input_container}>
                                    <Input
                                        className={styles.input}
                                        type='password'
                                        variant='formAds'
                                        placeholder='Введите цену услуги...'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    )
}

