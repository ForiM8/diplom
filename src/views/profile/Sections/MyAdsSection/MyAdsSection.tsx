'use state'
import { ProductsList } from '@/components/products/products-list/ProductsList'
import styles from './MyAdsSection.module.scss'
import { Select } from '@/components/ui/select/Select'
import { useState } from 'react'
import { Button } from '@/components/ui/button/Button'
import { redirect } from 'next/navigation'

export const MyAdsSection = (
) => {
    return (
        <div className={styles.container}>
            <h1>Мои объявления</h1>
            <div>
                {true ? (
                    <ProductsList MyAdsSection={true} />
                ) : (
                    // <ProductListSkeleton />
                    null
                )}
            </div>
            <Button
                className={styles.btn_size}
                variant='primary'
                onClick={() => redirect('/make-ads')}
            >
                Разместить объявление
            </Button>

        </div>
    )
}
