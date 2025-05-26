'use client'

import { MessageUser } from '@/components/messenger/messageUser'
import styles from './MessengerPage.module.scss'
import { Section } from '@/components/layout/Section/Section'
import { MessageСompanion } from "@/components/messenger/MessageСompanion";
import { MessageDocument } from '@/types/messenger.types'
import { useEffect, useMemo, useRef, useState } from 'react'
import EmojiPicker from 'emoji-picker-react'
import { messengerUpdate } from '@/actions/messenger/messenger.action'
import { User } from '@/types/User.types'

export const MessengerPage = ({ messageData, userData }: { messageData: MessageDocument, userData: User }) => {
    const [userName, setUserName] = useState<string | null | undefined>('')
    const [message, setMessage] = useState<MessageDocument>(messageData)
    const [messageTrue, setMessageTrue] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [input, setInput] = useState('')
    const [openEmoji, setOpenEmoji] = useState(false)

    const clickEmoji = () => {
        setOpenEmoji(prev => !prev)
    }

    useEffect(() => {
        setTimeout(() => setUserName(userData?.user?.name), 500)
    }, [userData?.user?.name])

    const validate = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length > 0) {
            setMessageTrue(true)
        } else {
            setMessageTrue(false)
        }
    }

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "end" })
        }
    }

    useEffect(() => {
        scrollToBottom()
    }, [messageData])

    const addMessage = async () => {
        if (input && userData?.user) {
            const newMessage = {
                text: input,
                dateText: new Date(),
                ...userData?.user,
            };
            setMessage(prev => ({
                ...prev,
                message: [...prev.message, newMessage]
            }));
            setInput('');
            setMessageTrue(false);
        }
    };

    useEffect(() => {
        const messengerUpdateTry = async () => {
            try {
                await messengerUpdate(message);
            } catch (error) {
                console.error('Failed to update messenger:', error);
            }
        };

        messengerUpdateTry();
    }, [message]);

    const formatDate = useMemo(() => (timestamp: any) => {
        const dateInDATA = new Date(timestamp);
        const now = new Date();
        const formattedTime = dateInDATA.toLocaleTimeString('ru-RU', { hour: 'numeric', minute: 'numeric', hour12: false });

        let formattedDate = '';
        if (dateInDATA.getDate() === now.getDate() && dateInDATA.getMonth() === now.getMonth() && dateInDATA.getFullYear() === now.getFullYear()) {
            formattedDate = 'Сегодня';
        } else if (
            now.getDate() - dateInDATA.getDate() === 1 &&
            now.getMonth() === dateInDATA.getMonth() &&
            now.getFullYear() === dateInDATA.getFullYear()
        ) {
            formattedDate = 'Вчера';
        } else {
            formattedDate = dateInDATA.toLocaleDateString('ru-RU');
        }
        return formattedDate + ', ' + formattedTime;
    }, []);

    const onEmojiClick = (emojiObject: any) => {
        setInput(prev => prev + emojiObject.emoji)
        setOpenEmoji(prev => !prev)
        setMessageTrue(prev => !prev)
    }

    return (
        <div className={styles.container}>
            <Section>
                <div className={styles.mainContainer}>
                    <div className={styles.right}>
                        <div>
                            <div className={styles.headerContainer}>
                                <div className={styles.header}>
                                    <img className={styles.avatar} src={messageData.item.images[0].image} alt={messageData.item.title}></img>
                                    <div className={styles.textContainer}>
                                        <div className={styles.name}>{messageData.item.user.name}</div>
                                        <div className={styles.online}>В сети - 13:22</div>
                                    </div>
                                    <div className={styles.buttonContainer}>
                                        <div className={styles.phoneCall}></div>
                                        <div className={styles.videoCall}></div>
                                        <button className={styles.dots}></button>
                                    </div>
                                </div>
                                <EmojiPicker
                                    open={openEmoji}
                                    style={{ position: 'absolute', zIndex: '10', right: '100px', bottom: '113px' }}
                                    onEmojiClick={onEmojiClick}
                                />
                            </div>
                            <div className={styles.mainMessenger}>
                                {messageData?.message?.map((message, i) => {
                                    if (message.name !== userName) {
                                        return (
                                            <MessageСompanion
                                                {...message}
                                                key={i}
                                                lastTimeMessages={formatDate(message.dateText)}
                                            />
                                        )
                                    } else {
                                        return (
                                            <MessageUser
                                                {...message}
                                                key={i}
                                                date={formatDate(message.dateText)}
                                            />
                                        )
                                    }
                                })}
                                <div ref={messagesEndRef} />
                            </div>
                            <div className={styles.footer}>
                                <div className={styles.inputBlock}>
                                    <input
                                        id="message"
                                        name="message"
                                        type="text"
                                        className={styles.input}
                                        placeholder='Type your message here...'
                                        value={input}
                                        onChange={(event) => {
                                            setInput(event.target.value)
                                            validate(event)
                                        }}
                                    />
                                    <div className={styles.addFile}></div>
                                    <button onClick={clickEmoji} className={styles.smile}></button>
                                    <button className={styles.smile}></button>
                                    <div className={styles.camera}></div>
                                </div>
                                {messageTrue ? (
                                    <button className={styles.buttonSend} onClick={addMessage}></button>
                                ) : (
                                    <button className={styles.buttonVoise}></button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    )
}
