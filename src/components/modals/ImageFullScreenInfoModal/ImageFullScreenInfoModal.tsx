'use client'

import { Modal } from '@/components/layout/ModalWindow/Modal'
import { Section } from '@/components/layout/Section/Section'
import { ImageCustom } from '@/components/ui/ImageCustom'
import { Product } from '@/types/Product.types'
import { formatCurrencyRub } from '@/utils/formatCurrencyRub'
import { Slider } from '@/components/slider/Slider';
import { Dispatch, SetStateAction } from 'react'
import { removeTags } from '@/utils/removeTags'

interface ImageFullScreenInfoModal {
	isShow: boolean
	setIsShow: Dispatch<SetStateAction<boolean>>
	item: any
	selectImageIndex: number
}

export const ImageFullScreenInfoModal = ({
	isShow,
	setIsShow,
	item,
	selectImageIndex,
}: ImageFullScreenInfoModal) => {
	// debugger
	console.log('selectImageIndex - ', selectImageIndex)
	return (
		<Modal isShow={isShow} setIsShow={setIsShow}>
			<Section>
				<div className='flex justify-center items-center gap-[20px] text-white rounded-[12px]'>
					<div className='w-[950px] h-[auto]'>
						<Slider
							settings={{ slidesPerView: 1, spaceBetween: 20, initialSlide: selectImageIndex }}
							arrowNext={true}
							arrowPrev={true}
							items={item.images.map((img: any, i: any) => (
								<div className='relative' key={i}>
									<img
										className='w-[950px] h-[650px] bg-[#fff] rounded-[10px]'
										src={img.image}
										alt='img'
									/>
								</div>
							))}
							pagination
						/>
					</div>
					{/* <ImageCustom
						className='w-[950px] h-[650px] bg-[#fff] rounded-[10px]'
						src={`${process.env.BACK_IMAGE_URL}/${item.images[selectImageIndex].path}`}
					/> */}
					<div className='bg-[#0000004f] backdrop-blur-md p-[10px] rounded-[12px] border-[1px] border-[#ffffff36] w-[40%] h-fit max-h-[550px] overflow-y-auto'>
						<div className='flex gap-[10px] mb-[15px] items-center'>
							<p className='text-[22px]'>{item.name}</p>
							<p className='p-[3px] bg-red-500 rounded-[8px]'>
								{formatCurrencyRub(item.price)}
							</p>
						</div>
						{removeTags(item.description)}
					</div>
				</div>
			</Section>
		</Modal>
	)
}
