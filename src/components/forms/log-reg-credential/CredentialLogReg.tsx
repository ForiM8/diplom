'use client'
import { Section } from '@/components/layout/Section/Section'
import { Button } from '@/components/ui/button/Button'
import { Input } from '@/components/ui/input/Input'
import { CreateUser, LoginUser } from '@/types/User.types'
import { validateEmail } from '@/utils/validateEmail'
import { ErrorMessage } from '@hookform/error-message'
import clsx from 'clsx'
import { signIn, useSession } from 'next-auth/react'
import { Ubuntu } from 'next/font/google'
import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import styles from './CredentialLogReg.module.scss'
import { useRouter } from 'next/navigation'
import { userCreate } from '@/actions/user/user.actions'
import { login } from '@/actions/auth/auth.action'

const ubuntu = Ubuntu({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
})

type AuthFormData<T extends 'register' | 'login' | 'restore'> = T extends 'register'
    ? LoginUser
    : CreateUser

export const CredentialLogReg = () => {
    const router = useRouter()
    const { data: session, status } = useSession();
    const [actionVariable, setActionVariable] = useState<'register' | 'login' | 'restore'>(
        'login'
    )
    const [checkboxes, setCheckboxes] = useState({
        // offer: false,
        personalData: false,
        newsletter: false,
        // reviews: false,
    });
    const [errorCheckbox, setErrorCheckbox] = useState({
        // offer: true,
        personalData: true,
        newsletter: true,
        // reviews: true,
    })
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

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<AuthFormData<typeof actionVariable>>()

    const handleRegistrationError = (errorCode: string): string => {
        const errorMessages: { [key: string]: string } = {
            THIS_EMAIL_ALREADY_USED: "Этот адрес электронной почты уже используется. Попробуйте восстановить пароль.",
        };
        return errorMessages[errorCode] || "Произошла неизвестная ошибка. Пожалуйста, попробуйте позже.";
    }

    const onSubmit = async (data: AuthFormData<typeof actionVariable>) => {

        console.log('actionVariable - ', actionVariable)
        try {
            if (actionVariable === 'register') {
                const dataUser = {
                    email: data.email,
                    name: data.name,
                    rating: 0,
                    avatar: '',
                    reviews: 0,
                }
                const res = await userCreate(dataUser);
                console.log('res 0 - ', res)
                if (res.result) {
                    setActionVariable('login');
                    return toast.success(
                        // @ts-ignore
                        `${data.name}, регистрация прошла успешно, войдите в аккаунт!`
                    );
                } else {
                    toast.error(`${handleRegistrationError(res.error.message)}`);
                }
            } else if (actionVariable === 'login') {
                const result = await signIn('login', {
                    email: data.email,
                    password: data.password,
                    callbackUrl: '/profile/settings',
                    redirect: false,
                });
                console.log('result 0 - ', result)
                if (result?.error) {
                    // toggleLoader()
                    toast.error(
                        <div>
                            Неверные введенные данные
                            <Button
                                onClick={() => handleRestoreActionVariable()}
                            // className={styles.btn_size_toast}
                            // variant='toast'
                            >
                                Восстановить пароль
                            </Button>
                        </div>,
                        {
                            closeOnClick: true,
                        }
                    );
                } else {
                    router.replace('/profile/settings')
                }
            } else {
                toast.error("Функция еще в разработке");
            }
        } catch (error) {
            console.log('error - ff - ', error);
            toast.error("Произошла ошибка. Попробуйте снова.");
        }
    };

    const password = watch('password', '')

    return (
        <Section>
            <div className={`${styles.container} ${ubuntu.className}`}>
                {/* LEFT SIDE (ПРИЗЫВ ЛИБО ВОЙТИ ЛИБО РЕГИСТРАЦИЯ)   */}
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
                {/* LOGIN / REGISTER FORM  */}
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* INPUTS FORM  */}
                        <div className={`${styles.form_container}`}>
                            <div className={styles.input_container}>
                                <Input
                                    {...register('email', {
                                        required: 'Заполните поле',
                                        validate: (value) => {
                                            if (!validateEmail(value)) {
                                                return 'Введите корректный Email!'
                                            }
                                            return true
                                        },
                                    })}
                                    type='email'
                                    variant='form'
                                    label='Почта'
                                    placeholder='example@yandex.ru'
                                />
                                <p className={styles.errors_message}>
                                    <ErrorMessage errors={errors} name='email' />
                                </p>
                            </div>
                            {actionVariable === 'register' && (
                                <div className={clsx(styles.input_container)}>
                                    <Input
                                        {...register('name', {
                                            required: 'Заполните поле',
                                            minLength: {
                                                value: 10,
                                                message:
                                                    'ФИО должно быть минимум 10 символа',
                                            },
                                        })}
                                        variant='form'
                                        label='ФИО'
                                        placeholder='Иванов Иван Иванович'
                                    />
                                    <p className={styles.errors_message}>
                                        <ErrorMessage errors={errors} name='name' />
                                    </p>
                                </div>
                            )}
                            {actionVariable !== 'restore' && (<div className={styles.input_container}>
                                <Input
                                    {...register('password', {
                                        required: 'Заполните поле',
                                        minLength: {
                                            value: 6,
                                            message: 'Пароль должен быть минимум 6 символов',
                                        },
                                    })}
                                    variant='form'
                                    label='Пароль'
                                    placeholder='********'
                                    type='password'
                                />
                                <p className={styles.errors_message}>
                                    <ErrorMessage errors={errors} name='password' />
                                </p>
                            </div>
                            )}

                            {actionVariable === 'register' && (
                                <>
                                    <div className={clsx(styles.input_container)}>
                                        <Input
                                            {...register('confirm_password', {
                                                required: 'Заполните поле',
                                                validate: (value) => {
                                                    if (value !== password) {
                                                        return 'Пароли не совпадают'
                                                    }
                                                    return true
                                                },
                                            })}
                                            type='password'
                                            variant='form'
                                            label='Подтвердите пароль'
                                            placeholder='********'
                                        />
                                        <p className={styles.errors_message}>
                                            <ErrorMessage errors={errors} name='confirm_password' />
                                        </p>
                                    </div>

                                </>
                            )}
                        </div>
                        {/* SUBMIT BUTTON  */}

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
