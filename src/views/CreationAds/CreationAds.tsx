'use client'
import { Section } from '@/components/layout/Section/Section'
import styles from './CreationAds.module.scss'
import { Input } from '@/components/ui/input/Input'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button/Button'
import { toast } from 'react-toastify'
import { productCreate } from '@/actions/products/products.action'
import userStore from '@/stores/user/UserStores'
import { ErrorMessage } from '@hookform/error-message'


type CreationAds = {
    title: string
    description: string
    price: number
    image: FileList // Добавьте поле для изображения
}

export const CreationAds = ({ categoryData }: { categoryData: any }) => {
    const [categoryId, serCategoryId] = useState<string>('')
    console.log('categoryId - ', categoryId)

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<CreationAds>()

    const convertToHtmlTags = (text: string): string => {
        let htmlText = text.replace(/\./g, '<span class="dot">.</span>');
        htmlText = htmlText.replace(/,/g, '<span class="comma">,</span>');
        htmlText = htmlText.replace(/\n/g, '<br />');

        return htmlText;
    };
    const onSubmit = async (data: CreationAds) => {
        console.log('НАЧАЛО')
        const dataCreate = {
            title: data.title,
            description: convertToHtmlTags(data.description),
            price: data.price,
            images: [{
                image: data.image
            }],
            categorySlug: categoryId,
            user: userStore?.user
        }
        try {
            const result = await productCreate(dataCreate);
            console.log('result 0 - ', result)
            if (result?.error) {
                // toggleLoader()
                toast.error(
                    <div>
                        ошибка
                    </div>,
                    {
                        closeOnClick: true,
                    }
                );
            } else {
                toast.success(
                    <div>
                        Успех
                    </div>,
                    {
                        closeOnClick: true,
                    }
                );
            }

        } catch (err) {
            toast.error(<div>ошибка вап вап</div>)
        }
    }
    const password = watch('description', '')
    return (
        <div className={styles.bg}>
            <Section>
                <div className={styles.container}>
                    <h1>Новое объявление</h1>

                    <div className={styles.main}>
                        <h2>
                            Подробности
                        </h2>
                        <div className={styles.block}>
                            <h3>Выберите категорию</h3>

                            <div className={styles.category_container}>
                                {categoryData.map((elem: any, i: any) => {
                                    return (
                                        <div onClick={() => serCategoryId(elem.slug)} className={categoryId !== elem.slug ? styles.category : styles.category_active} key={i}>
                                            {elem.title}
                                        </div>
                                    )
                                })}
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className={styles.block}>
                                    <h3>Название услуги</h3>
                                    <div className={styles.input_container}>
                                        <Input
                                            {...register('title', {
                                                required: 'Заполните поле',
                                                minLength: {
                                                    value: 5,
                                                    message:
                                                        'Название должно быть минимум 5 символа',
                                                },
                                            })}
                                            className={styles.input}
                                            type='text'
                                            variant='formAds'
                                            placeholder='Введите название услуги...'
                                        />
                                        <p className={styles.errors_message}>
                                            <ErrorMessage errors={errors} name='title' />
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.block}>
                                    <h3>Описание услуги</h3>
                                    <div className={styles.input_container}>
                                        <Input
                                            {...register('description', {
                                                required: 'Заполните поле',
                                                minLength: {
                                                    value: 10,
                                                    message:
                                                        'Описание должно быть минимум 10 символов',
                                                },
                                            })}
                                            className={styles.input}
                                            type='text'
                                            variant='formAds'
                                            placeholder='Введите описание услуги...'
                                        />
                                        <p className={styles.errors_message}>
                                            <ErrorMessage errors={errors} name='description' />
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.block}>
                                    <h3>Цена услуги</h3>
                                    <div className={styles.input_container}>
                                        <Input
                                            {...register('price', {
                                                required: 'Заполните поле',

                                            })}
                                            className={styles.input}
                                            type='number'
                                            variant='formAds'
                                            placeholder='Введите цену услуги...'
                                        />
                                        <p className={styles.errors_message}>
                                            <ErrorMessage errors={errors} name='price' />
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.block}>
                                    <h3>Изображение услуги</h3>
                                    <div className={styles.input_container}>
                                        <Input
                                            {...register('image', {
                                                required: 'Загрузите изображение',
                                            })}
                                            className={styles.input}
                                            type='text'
                                            variant='formAds'
                                            placeholder='Укажите url изображения...'
                                        />
                                        <p className={styles.errors_message}>
                                            <ErrorMessage errors={errors} name='image' />
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.button_container}>
                                    <Button type='submit'>
                                        Создать
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </Section>
        </div>
    )
}

