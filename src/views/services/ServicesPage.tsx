"use client"

import { Crumbs } from '@/components/crumbs/Crumbs'
import styles from './ServicesPage.module.scss'
import { Section } from "@/components/layout/Section/Section"
import { ImageCustom } from '@/components/layout/ui/ImageCustom'
import { SERVICES } from '@/components/dataTime/dataTime'

export const Services = () => {

    return (
        <div className={styles.bg}>
            <Section>
                <div className={styles.main_container}>

                    <Crumbs span={'Блог'} />

                    <h1>Услуги</h1>

                    <div className={styles.container}>
                        <div className={styles.service_container}>
                            {SERVICES.map((elem) => {
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
                </div>
            </Section>
        </div>
    )
}