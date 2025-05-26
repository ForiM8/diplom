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
import { MessageDocument } from '@/types/messenger.types'
import { messengerGetByUser } from '@/actions/messenger/messenger.action'
import { observer } from 'mobx-react-lite'

export const AccountMessengerListSection = observer(({ setActivePanel, messengerData, userData }: { setActivePanel: Dispatch<SetStateAction<number>>, messengerData: MessageDocument[], userData: User }) => {
    const [user, setUser] = useState<User>()
    const [phoneNumber, setPhoneNumber] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [nickname, setNickname] = useState('')
    // const router = useRouter()

    const redirect = useCallback((elem: MessageDocument) => {
        // if (router.isReady) {
        const newUrl = `${window.location.origin}/messenger/${elem._id}`;
        window.location.replace(newUrl)
        setActivePanel(5)
        // console.log('успех', window.location)
        // }
    }, [])

    console.log('messengerData - ', messengerData)
    return (
        <>
            <Input
                variant='navigation'
                type='text'
                placeholder='Искать'
                className={styles.search_input}
            />
            <div className={styles.block_container}>
                {messengerData?.map((elem, i) => {
                    if (elem?.customer._id === userData?.user?._id) {
                        return (
                            <div className={styles.block} key={i}>
                                <img
                                    onClick={() => redirect(elem)}
                                    className={styles.img}
                                    src={elem?.item.images[0].image}
                                />
                                <div className={styles.text_container}>
                                    <h3 onClick={() => redirect(elem)}>{elem.item.user.name}</h3>
                                    <p>Хороший спец</p>
                                </div>
                            </div>
                        )
                    }

                })}

            </div>
        </>
    )
});
