'use client'
import { Button } from '@/components/ui/button/Button'
import { ImageCustom } from '@/components/ui/ImageCustom'
import { Input } from '@/components/ui/input/Input'
import { useCallback, useEffect, useState } from 'react'
import AvatarImage from '../../../../assets/standartAvatar/standartAvatar.png'
import styles from './AccountSettingsSection.module.scss'
import { User } from '@/types/User.types'
import userStore from '@/stores/user/UserStores'
import { observer } from 'mobx-react-lite'

export const AccountSettingsSection = observer(() => {
    const [user, setUser] = useState<User>()
    const [phoneNumber, setPhoneNumber] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [nickname, setNickname] = useState('')

    const saveUserSettings = async () => {
        const data = {
            id: user?.id,
            email: email,
            phone: phoneNumber,
            name: username,

        };
    };

    return (
        <>
            <div className={styles.user_avatar_container}>
                <ImageCustom classNameImg={styles.avatar_image} src={AvatarImage} />
                <div>
                    <p className={styles.username}>{userStore?.user?.name}</p>
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
                    label='Никнейм'
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                />
            </div>

            <div className={styles.user_account_manager_container}>
                <Button onClick={saveUserSettings} variant='small'>Сохранить</Button>
            </div>
        </>
    )
});
