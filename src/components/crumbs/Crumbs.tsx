"use client"

import styles from './Crumbs.module.scss'

export const Crumbs = ({ span, slug }: { span: string, slug?: string }) => {
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
                {slug ? <div>
                    <span>{slug}</span>
                </div> : null}

            </div >
        </div>

    )
}