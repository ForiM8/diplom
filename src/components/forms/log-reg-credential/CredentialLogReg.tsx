'use client'
import { Section } from '@/components/layout/Section/Section'
import { CreateUser, LoginUser } from '@/types/User.types'
import clsx from 'clsx'
import { Ubuntu } from 'next/font/google'
import { useCallback, useState } from 'react'
import styles from './CredentialLogReg.module.scss'
import { Button } from '@/components/ui/button/Button'
import { Input } from '@/components/ui/input/Input'

const ubuntu = Ubuntu({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
})

export const CredentialLogReg = () => {
    const [actionVariable, setActionVariable] = useState<'register' | 'login' | 'restore'>(
        'login'
    )
    const handleSwitchActionVariable = () => {
        if (actionVariable === 'register') {
            setActionVariable('login')
        } else {
            setActionVariable('register')
        }
    }

    const handleRestoreActionVariable = () => {
        setActionVariable('restore')
    }



    return (
        <Section>
            <div className={`${styles.container} ${ubuntu.className}`}>
                <div className={`${styles.left_side}`}>
                    <header>
                        <h2>
                            {actionVariable === 'register'
                                ? 'Войдите снова!'
                                : 'Зарегистрируйтесь!'}
                        </h2>
                        <p className={`${styles.sub_title} ${styles.sub_title_left}`}>
                            {actionVariable === 'register'
                                ? 'Если вы уже входили \n в аккаунт ранее, войдите'
                                : 'Если у вас еще нет \n  аккаунта, зарегистрируйтесь'}
                        </p>
                    </header>
                    <div className={styles.btn_container}>
                        <Button
                            onClick={() => handleSwitchActionVariable()}
                            className={styles.btn_size}
                            variant='secondary'
                        >
                            {actionVariable === 'register' ? 'Войти' : 'Регистрация'}
                        </Button>
                        <Button
                            onClick={() => handleRestoreActionVariable()}
                            className={styles.btn_size}
                            variant='secondary'
                        >
                            Восстановить пароль
                        </Button>
                    </div>
                </div>
                <div className={`${styles.right_side}`}>
                    <header className={`${styles.right_title_container}`}>
                        <h2>
                            {actionVariable === 'register' && 'Создайте аккаунт'}
                            {actionVariable === 'login' && 'Войдите в аккаунт'}
                            {actionVariable === 'restore' && 'Восстановление пароля'}
                        </h2>
                        <p className={`${styles.sub_title}`}>
                            {actionVariable === 'register' && 'Для регистрации заполните форму'}
                            {actionVariable === 'login' && 'Чтобы войти, заполните форму'}
                            {actionVariable === 'restore' && 'Для восстановления пароля введите почту'}
                        </p>
                    </header>
                    <form>
                        <div className={`${styles.form_container}`}>
                            <div className={styles.input_container}>
                                <Input

                                    type='email'
                                    variant='form'
                                    label='Почта'
                                    placeholder='example@yandex.ru'
                                />
                            </div>
                            {actionVariable === 'register' && (
                                <div className={clsx(styles.input_container)}>
                                    <Input

                                        variant='form'
                                        label='ФИО'
                                        placeholder='Иванов Иван Иванович'
                                    />
                                </div>
                            )}
                            {actionVariable !== 'restore' && (<div className={styles.input_container}>
                                <Input

                                    variant='form'
                                    label='Пароль'
                                    placeholder='********'
                                    type='password'
                                />

                            </div>
                            )}

                            {actionVariable === 'register' && (
                                <div className={clsx(styles.input_container)}>
                                    <Input

                                        type='password'
                                        variant='form'
                                        label='Подтвердите пароль'
                                        placeholder='********'
                                    />

                                </div>
                            )}
                        </div>

                        <Button type='submit' className={styles.btn_size}>
                            {actionVariable === 'register' && 'Создать аккаунт'}
                            {actionVariable === 'login' && 'Войти'}
                            {actionVariable === 'restore' && 'Отправить сообщение'}
                        </Button>
                    </form>
                </div>
            </div>
        </Section>
    )
}
