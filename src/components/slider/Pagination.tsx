'use client'
import { HTMLAttributes, ReactNode, useEffect, useState } from 'react'
import { SwiperRef } from 'swiper/react'
import { SwiperOptions } from 'swiper/types'
import { Slider } from './Slider'
import './Pagination.scss' // Импортируйте ваш SCSS файл

interface PaginationProps extends HTMLAttributes<HTMLDivElement> {
    itemsLength: number
    swiperRef: SwiperRef
    customPagination?: ReactNode[]
}

export const Pagination = ({
    itemsLength,
    swiperRef,
    customPagination,
    ...props
}: PaginationProps) => {
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const swiper = swiperRef.swiper
        if (swiper) {
            setActiveIndex(swiper.activeIndex)
            swiper.on('slideChange', () => {
                setActiveIndex(swiper.activeIndex)
            })
        }
    }, [swiperRef])

    return (
        <>
            {customPagination ? (
                <div className='pagination-container'>
                    <Slider
                        settings={swiperSettingsCustomPagination}
                        arrowPrev={false}
                        items={customPagination.map((item, i) => (
                            <div onClick={() => swiperRef.swiper.slideTo(i)} key={i}>
                                {item}
                            </div>
                        ))}
                    />
                </div>
            ) : (
                <div className='pagination-absolute'>
                    {Array.from({ length: itemsLength }).map((_, i) => (
                        <div
                            onClick={() => swiperRef.swiper.slideTo(i)}
                            className='pagination-item'
                            key={i}
                        >
                            <div
                                className={`pagination-item div ${activeIndex === i ? 'active' : ''} ${props.className}`}
                                key={i}
                                {...props}
                            ></div>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

const swiperSettingsCustomPagination: SwiperOptions = {
    slidesPerView: 5,
    spaceBetween: 6,
}
