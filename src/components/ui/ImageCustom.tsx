import { StaticImageData, StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import { HTMLAttributes } from 'react'

interface ImageCustomProps extends HTMLAttributes<HTMLDivElement> {
    src: string | StaticImageData | StaticImport
    alt?: string
    classNameImg?: string
    width?: number
    height?: number
}

export const ImageCustom = ({
    src,
    alt,
    classNameImg,
    width,
    height,
    ...props
}: ImageCustomProps) => {
    return (
        <div {...props} className={`relative ${props.className}`}>
            <Image
                width={width}
                height={height}
                className={`object-contain size-full ${classNameImg}`}
                src={src}
                fill={typeof src === 'string' ? true : false}
                alt={alt || 'image'}
            />
        </div>
    )
}
