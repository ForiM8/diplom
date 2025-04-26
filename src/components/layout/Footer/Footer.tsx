'use client'

import { Section } from '../Section/Section'
import styles from './Footer.module.scss'
import Address from '@/assets/icons/address-icon.png'
import Mail from '@/assets/icons/mail-icon.svg.png'
import Phone from '@/assets/icons/phone-icon.svg.png'
import Whatsapp from '@/assets/icons/whatsapp.svg.png'
import Telegram from '@/assets/icons/telegram.svg.png'
import { ImageCustom } from '@/components/ui/ImageCustom'
import { Button } from '@/components/ui/button/Button'

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <Section>
                <div className={styles.container}>
                    <div className={styles.mainText}>
                        <div className={styles.column}>
                            <div className={styles.block}>
                                <p>ООО "НАЗВАНИЕ КОМПАНИИ"</p>
                                <p>ОРГН: 11733280XXXXX</p>
                                <p>ИНН: 33271XXXXX</p>
                            </div>
                            <div className={styles.block}>
                                <p>Обращаем ваше внимание, что сайт носит исключительно
                                    информационный характер и ни при каких условиях не является
                                    публичной офертой.</p>
                            </div>
                        </div>
                        <div className={styles.columnRow}>
                            <div className={styles.block}>
                                <h4>Информация</h4>
                                <p>Портфолио</p>
                                <p>Блог</p>
                                <p>Цены</p>
                                <p>Контакты</p>
                                <p>Политика конфиденциальности</p>
                            </div>
                            <div className={styles.block}>
                                <h4>Услуги</h4>
                                <p>Автоподбор легковых автомобилей</p>
                                <p>Автоподбор грузовых ТС</p>
                                <p>Выездная диагностика автомобилей</p>
                                <p>Выездная диагностика грузовых ТС</p>
                                <p>Сопровождение сделок</p>
                                <p>Эндоскопия ДВС</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.moreInfo}>
                        <div className={styles.block}>
                            <ImageCustom
                                classNameImg={styles.img}
                                src={Address}
                            />
                            <p>Россия, 125040, г. Москва, ул. Большая Пироговская 18/1</p>
                        </div>
                        <div className={styles.block}>
                            <ImageCustom
                                classNameImg={styles.img}
                                src={Mail}
                            />
                            <p>info@sitename.ru</p>
                        </div>
                        <div className={styles.block}>
                            <ImageCustom
                                classNameImg={styles.img}
                                src={Phone}
                            />
                            <p>+7 (987) 654-32-10</p>
                        </div>
                        <div className={styles.block}>
                            <ImageCustom
                                classNameImg={styles.img}
                                src={Whatsapp}
                            />
                            <p>WhatsApp</p>
                        </div>
                        <div className={styles.block}>
                            <ImageCustom
                                classNameImg={styles.img}
                                src={Telegram}
                            />
                            <p>Telegram</p>
                        </div>
                    </div>
                    <div className={styles.upd}>
                        <div className={styles.block}>
                            <p>2025 г. Cайта автоподбор, помощь в покупке автомобилей</p>
                        </div>
                        <div className={styles.block}>
                            <p>Разработано <span>Мальцевым Никитой</span></p>
                            <Button
                                variant="up">
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    )
}