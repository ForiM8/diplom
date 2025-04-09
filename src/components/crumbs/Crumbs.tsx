"use client"

import styles from './Crumbs.module.scss'

export const Crumbs = ({ span }: { span: string }) => {
    return (
        <div className={styles.crumbs}>
            <div className={styles.list}>
                <div>
                    <a href="/">
                        Главная
                    </a>

                </div>
                <div>
                    <span>{span}</span>
                </div>
            </div >
        </div>

    )
}