'use client'

import { GROUPS_DATA } from "@/components/dataTime/dataTime";
import { MessageUser } from "@/components/messenger/messageUser";
import { MessageСompanion } from "@/components/messenger/MessageСompanion";
import EmojiPicker from "emoji-picker-react";
import { useEffect, useRef, useState } from "react";
import styles from './AccountMessengerSection.module.scss';
import userStore from "@/stores/user/UserStores";
import { messengerGetByUser } from "@/actions/messenger/messenger.action";
import { MessageDocument } from "@/types/messenger.types";

export const AccountMessengerSection = () => {
    const formatDate = (timestamp: any) => {
        const dateInDATA = new Date(timestamp)
        const now = new Date()
        const formattedTime = dateInDATA.toLocaleTimeString('en-en', { hour: 'numeric', minute: 'numeric', hour12: true }).toLowerCase()

        let formattedDate = ''
        if (dateInDATA.getDate() === now.getDate()) {
            formattedDate = 'Today'
        } else if (now.getDate() - dateInDATA.getDate() === 1) {
            formattedDate = 'Yesterday'
        } else {
            formattedDate = dateInDATA.toDateString()
        }
        return formattedDate + ', ' + formattedTime
    }
    return (
        <div className={styles.mainContainer}>
            <div className={styles.right}>
                {GROUPS_DATA.map((group, i) => {
                    if (group.id === 0) {
                        return (
                            <div key={i}>
                                <div className={styles.headerContainer}>

                                    <div className={styles.header}>
                                        <img className={styles.avatar} src={group.avatar} alt={group.name}></img>

                                        <div className={styles.textContainer}>
                                            <div className={styles.name}>{group.name}</div>
                                            <div className={styles.online}>Online - Last seen, 2.02pm</div>
                                        </div>

                                        <div className={styles.buttonContainer}>
                                            <div className={styles.phoneCall}></div>
                                            <div className={styles.videoCall}></div>
                                            {/* <button onClick={() => setModalActive(prev => !prev)} className="mainContainer__right__headerContainer__header__buttonContainer-dots"></button>  */}
                                            <button className={styles.dots}></button>

                                            {/* <Modal active={modalActive} setActive={setModalActive}>
                                                <UserList name={nameGroup} admin={nameCreator} />
                                            </Modal> */}

                                        </div>

                                    </div>
                                </div>
                                <div className={styles.mainMessenger}>
                                    {group.text.map((message) => {
                                        if (message.name) {
                                            return (
                                                <MessageСompanion
                                                    {...message}
                                                    key={message.id}
                                                    lastTimeMessages={formatDate(message.lastTimeMessages)}
                                                />
                                            )
                                        } else if (message.status === 'delete') {
                                            return (
                                                <div className={styles.deleteContainer}>
                                                    <div className={styles.text}>user {message.text} deleted</div>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <MessageUser
                                                    {...message}
                                                    key={message.id}
                                                    date={formatDate(message.lastTimeMessages)}
                                                />
                                            )
                                        }
                                    })}
                                    {/* <div ref={messagesEndRef} /> */}
                                </div>

                                <div className={styles.footer}>

                                    <div className={styles.inputBlock}>
                                        {/* <input
                                        id="message"
                                        name="message"
                                        type="text"
                                        className="mainContainer__right__footer__inputBlock-input"
                                        placeholder='Type your message here...'
                                        value={input}
                                        onChange={(event) => {
                                            setInput(event.target.value)
                                            validate(event)
                                        }}
                                    /> */}
                                        <input
                                            id="message"
                                            name="message"
                                            type="text"
                                            className={styles.input}
                                            placeholder='Type your message here...'
                                        // value={input}
                                        // onChange={(event) => {
                                        //     setInput(event.target.value)
                                        //     validate(event)
                                        // }}
                                        />
                                        <div className={styles.addFile}></div>
                                        {/* <button onClick={clickEmoji} className="mainContainer__right__footer__inputBlock-smile"></button> */}
                                        <button className={styles.smile}></button>

                                        <div className={styles.camera}></div>
                                    </div>

                                    {/* {messageTrue ? ( */}
                                    <button className={styles.buttonSend}></button>
                                    {/* ) : ( */}
                                    {/* <button className="mainContainer__right__footer-buttonVoise"></button>
                                )}  */}

                                </div>
                            </div>
                        )
                    }
                })}

            </div>
        </div>
    )
};
