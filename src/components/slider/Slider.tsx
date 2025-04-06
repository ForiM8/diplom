'use client'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image, { StaticImageData } from 'next/image'
import {
    HTMLAttributes,
    ReactNode,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import { SwiperOptions } from 'swiper/types'
import './slider.scss'
import { NextArrow, PrevArrow } from './Buttons'
import { Pagination } from './Pagination'

interface ImagesSizes {
    width: number
    height: number
}

interface SliderProps extends HTMLAttributes<HTMLDivElement> {
    settings?: SwiperOptions
    images?: (string | StaticImageData | StaticImport)[]
    imgSizes?: ImagesSizes
    items?: ReactNode[]
    arrowNext?: boolean
    arrowPrev?: boolean
    pagination?: boolean
    customPagination?: ReactNode[]
    swiperClass?: string
    objectFitImage?: 'cover' | 'contain'
}

export const Slider = ({
    settings,
    images,
    items,
    arrowNext = true,
    arrowPrev = true,
    pagination,
    customPagination,
    imgSizes,
    objectFitImage,
    swiperClass,
    ...props
}: SliderProps) => {
    const swiperRef = useRef<SwiperRef>(null)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        if (swiperRef.current) {
            setIsMounted(true);
        }
    }, [swiperRef]);

    useEffect(() => {
        if (settings?.initialSlide) {
            if (swiperRef.current && swiperRef.current.swiper) {
                swiperRef.current.swiper.slideTo(settings?.initialSlide, 0);
            }
        }
    }, [settings?.initialSlide]);

    const itemsLength = useMemo(
        () => images?.length || items?.length || 0,
        [images, items]
    )

    return (
        <div {...props} className={`slider ${isMounted ? '' : 'invisible'}`}>
            {arrowPrev && (
                <PrevArrow
                    onClick={() =>
                        swiperRef.current && swiperRef.current.swiper.slidePrev()
                    }
                />
            )}
            <Swiper {...settings} className={`swiper ${swiperClass}`} ref={swiperRef}>
                {images &&
                    images.map((image, i) => (
                        <SwiperSlide key={i}>
                            <div className='image-container'>
                                <Image
                                    width={imgSizes?.width}
                                    height={imgSizes?.height}
                                    fill={imgSizes ? false : true}
                                    className={`image ${objectFitImage || 'cover'}`}
                                    src={image}
                                    alt='img'
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                {items &&
                    items.map((item, i) => (
                        <SwiperSlide key={i}>
                            <ul className='items-list'>{item}</ul>
                        </SwiperSlide>
                    ))}
            </Swiper>
            {pagination && isMounted && swiperRef.current && (
                <Pagination
                    customPagination={customPagination}
                    swiperRef={swiperRef.current}
                    itemsLength={itemsLength}
                />
            )}
            {arrowNext && (
                <NextArrow
                    onClick={() =>
                        swiperRef.current && swiperRef.current.swiper.slideNext()
                    }
                />
            )}
        </div>
    )
}
