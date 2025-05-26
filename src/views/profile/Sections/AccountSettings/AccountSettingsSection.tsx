'use client'
import { Button } from '@/components/ui/button/Button'
import { ImageCustom } from '@/components/ui/ImageCustom'
import { Input } from '@/components/ui/input/Input'
import { useCallback, useEffect, useState } from 'react'
import AvatarImage from '../../../../assets/standartAvatar/standartAvatar.png'
import styles from './AccountSettingsSection.module.scss'
import { User } from '@/types/User.types'
import { observer } from 'mobx-react-lite'
import { userGet, userUpdate } from '@/actions/user/user.actions'
import { toast } from 'react-toastify'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export const AccountSettingsSection = observer(({ userData }: { userData: User }) => {
    const router = useRouter()
    // const [user, setUser] = useState<User>()
    const [phoneNumber, setPhoneNumber] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')
    // const { setUser, clearUser } = userStore

    // const userGetByData = async () => {
    //     const result = await userGet({ email: userStore?.user?.email })
    //     console.log('result - ', result)
    //     clearUser()
    //     setUser(result.result)
    // }
    console.log('userData - ', userData?.user)
    useEffect(() => {
        // if (userData?.user?.email) {
        //     userGetByData()
        // }

        setPhoneNumber(userData?.user?.phone || '');
        setUsername(userData?.user?.name || '');
        setEmail(userData?.user?.email || '');
        setCity(userData?.user?.city || '');
    }, [userData?.user?.email]);

    const saveUserSettings = async () => {
        const data = {
            id: userData?.user?._id,
            email,
            phone: phoneNumber,
            name: username,
            city: city,
            password: userData?.user?.password
        };
        try {
            await userUpdate(data);
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
                    </div>,
                    {
                        closeOnClick: true,
                    }
                );
            } else {
                router.replace('/profile/settings')
            }
            toast.success('Данные успешно сохранены');
        } catch (error) {
            console.error('Failed to update user data:', error);
            toast.error('Ошибка при сохранении данных');
        }
    };

    const FormatDate = (date: Date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        return `${day}.${month}.${year}`;
    };

    return (
        <>
            <div className={styles.user_avatar_container}>
                <ImageCustom classNameImg={styles.avatar_image} src={AvatarImage} />
                <div>
                    <p className={styles.username}>{userData?.user?.name}</p>
                    <p className={styles.date_registered}>Дата регистрации: 10.06.2024</p>
                </div>

            </div>

            <div className={styles.user_form_data}>
                <Input
                    variant='form'
                    label='Почта'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    variant='form'
                    label='Номер телефона'
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <Input
                    variant='form'
                    label='ФИО'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                    variant='form'
                    label='Город'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
            </div>

            <div className={styles.user_account_manager_container}>
                <Button onClick={saveUserSettings} variant='small'>Сохранить</Button>
            </div>
        </>
    )
});
