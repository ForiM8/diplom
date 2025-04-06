'use client'
import { HTMLAttributes, ReactNode, useEffect, useState } from 'react'
import { SwiperRef } from 'swiper/react'
import { SwiperOptions } from 'swiper/types'
import { Slider } from './Slider'

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
                <div className='flex items-center gap-[6px]'>
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
                <>
                    <div className='absolute bottom-[-20px] flex items-center justify-center w-full gap-[12px]'>
                        {Array.from({ length: itemsLength }).map((_, i) => (
                            <div
                                onClick={() => swiperRef.swiper.slideTo(i)}
                                className='flex items-center justify-center w-[35px] h-[15px] cursor-pointer group'
                                key={i}
                            >
                                <div
                                    className={`w-[30px] h-[2px] cursor-pointer duration-300 ease-in-out group-hover:bg-[#919191] ${activeIndex === i ? 'bg-black' : 'bg-[#D9D9D9]'
                                        } ${props.className}`}
                                    key={i}
                                    {...props}
                                ></div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </>
    )
}

const swiperSettingsCustomPagination: SwiperOptions = {
    slidesPerView: 5,
    spaceBetween: 6,
}
