'use client'
import { Button } from '@/components/ui/button/Button'
import { ImageCustom } from '@/components/ui/ImageCustom'
import { Input } from '@/components/ui/input/Input'
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react'
import AvatarImage from '../../../../assets/standartAvatar/standartAvatar.png'
import { User } from '@/types/User.types'
import styles from './AccountMessengerListSection.module.scss'
import Ava from '@/assets/images/standart_ava.png'
import { useRouter } from 'next/router'

export const AccountMessengerListSection = ({ setActivePanel }: { setActivePanel: Dispatch<SetStateAction<number>> }) => {
    const [user, setUser] = useState<User>()
    const [phoneNumber, setPhoneNumber] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [nickname, setNickname] = useState('')
    // const router = useRouter()

    const redirect = useCallback(() => {
        // if (router.isReady) {
        const newUrl = `${window.location.origin}/profile/messenger`;
        window.location.replace(newUrl)
        setActivePanel(5)
        // console.log('успех', window.location)
        // }
    }, [])

    return (
        <>
            <Input
                variant='navigation'
                type='text'
                placeholder='Искать'
                className={styles.search_input}
            />
            <div className={styles.block_container}>
                <div className={styles.block}>
                    <ImageCustom
                        onClick={redirect}
                        classNameImg={styles.img}
                        src={Ava}
                    />
                    <div className={styles.text_container}>
                        <h3 onClick={redirect}>Захар Витальевич123</h3>
                        <p>Хороший спец</p>
                    </div>
                </div>
            </div>
        </>
    )
};
