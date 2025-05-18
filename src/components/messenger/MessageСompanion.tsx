'use client'
import styles from '@/views/messenger/MessengerPage.module.scss'


export const MessageСompanion = ({ name, text, lastTimeMessages }: { name: string; text: string; lastTimeMessages: string }) => {
  return (
    <div className={styles.left}>
      <div className={styles.name}>
        {name}
      </div>
      <div className={styles.textContainer}>
        <div className={styles.dot}></div>
        <div className={styles.message}>
          {text}
        </div>
      </div>
      <div className={styles.time}>
        {lastTimeMessages}
      </div>
    </div>
  );
};
