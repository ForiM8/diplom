'use client'
import styles from '@/views/messenger/MessengerPage.module.scss'

export const MessageUser = ({ text, date }: { text: string; date: string }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <div></div>
      <div className={styles.rightMessenger}>
        <div className={styles.textContainer}>
          <div className={styles.message}>
            {text}
          </div>
          <div className={styles.dot}></div>
        </div>
        <div className={styles.time}>
          {date}
        </div>
      </div>
    </div>
  );
};
