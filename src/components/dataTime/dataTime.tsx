import Icn1 from '@/assets/images/icn1.png'
import Icn2 from '@/assets/images/icn2.png'
import Icn3 from '@/assets/images/icn3.png'
import Icn4 from '@/assets/images/icn4.png'
import Icn5 from '@/assets/images/icn5.png'
import Icn6 from '@/assets/images/icn6.png'
import People from '@/assets/images//people.png'
import { title } from 'process'

export const ABOUT = [
    {
        id: 1,
        title: '2 года',
        href: 'Успешно работаем на рынке автоподбора'
    },
    {
        id: 2,
        title: '1203',
        href: 'Выездных диагностик и автоподборов выполнили'
    },
    {
        id: 3,
        title: '250 тыс.',
        href: 'Средняя выгода пользователей'
    },
    {
        id: 4,
        title: '14 дней',
        href: 'Обычно нужно чтоб найти вам автомобиль'
    },
]

export const SERVICES = [
    {
        id: 1,
        title: 'Автоподбор легковых автомобилей',
        price: 'от 30 000 руб.',
        icon: Icn1,
        slug: 'av-leg-avto'
    },
    {
        id: 2,
        title: 'Автоподбор грузовых ТС',
        price: 'от 50 000 руб.',
        icon: Icn2,
        slug: 'av-gruz-tc'
    },
    {
        id: 3,
        title: 'Выездная диагностика автомобилей',
        price: 'от 2 000 руб.',
        icon: Icn3,
        slug: 'vie-di-av'
    },
    {
        id: 4,
        title: 'Выездная диагностика грузовых ТС',
        price: 'от 3 000 руб.',
        icon: Icn4,
        slug: 'vie-di-ts'
    },
    {
        id: 5,
        title: 'Сопровождение сделок',
        price: 'от 3 000 руб.',
        icon: Icn5,
        slug: 'sop-cdel'
    },
    {
        id: 6,
        title: 'Автоподбор мототехники',
        price: 'от 2 000 руб.',
        icon: Icn6,
        slug: 'av-moto'
    },
]

export const WHY_NEEDED = [
    {
        id: 1,
        title: 'Экономия времени',
        text: 'Вы не тратите время на бесполезные контакты, осмотры и диагностики.'
    },
    {
        id: 2,
        title: 'Полная проверка',
        text: 'Мы досконально проверим автомобиль на наличие любых дефектов.'
    },
    {
        id: 3,
        title: 'Выгодно',
        text: 'За счет разумного торга вы окупите выделенные на подбор автомобиля средства.'
    },
    {
        id: 4,
        title: 'Лучший вариант',
        text: 'Найдем для вас лучший автомобиль под ваши требования и бюджет.'
    },
    {
        id: 5,
        title: 'Юридическая чистота',
        text: 'Вы проверите юридическую чистоту автомобиля с прозрачной историей.'
    },
    {
        id: 6,
        title: 'Легко обслуживать',
        text: 'Для выбранного вами автомобиля, на рынке гарантированно есть запчасти.'
    }
]

export const WHY_CHECKED = [

    {
        id: 1,
        title: 'Проверка пробега',
        text: 'Проверка реальности пробега автомобиля по всем источникам и состоянию.'
    },
    {
        id: 2,
        title: 'Подвеска и ходовая',
        text: 'Проверка пыльников, чехлов, амортизаторов, утечек масла, люфт и др.'
    },
    {
        id: 3,
        title: 'Рулевое управление',
        text: 'Рулевые рейки, усилители руля, ШРУС и узлов, ступора, тормозную систему и резину.'
    },
    {
        id: 4,
        title: 'Кузов и жидкости',
        text: 'Проверим крышу, стойки, лонжероны, днище и навесные элементы.'
    },
    {
        id: 5,
        title: 'Салон и комплектация',
        text: 'Полная проверка салона автомобиля, проверка на соответствие комплектации.'
    },
    {
        id: 6,
        title: 'Электрика и безопасность',
        text: 'Проверим системы зажигания, осветительные приборы, подушки, сигнализацию и др.'
    },
    {
        id: 7,
        title: 'ABS и КПП',
        text: 'Выполняем тест драйв двигателя и КПП с детальным осмотром в сервисном центре.'
    },
    {
        id: 8,
        title: 'Документы',
        text: 'Проверим номера на кузове, VIN, № ДВС, номер рамы, сервисную историю и др.'
    }
]

export const RISKS = [
    {
        id: 1,
        title: 'Скрученный пробег',
        text: 'В 40% случаев продавцы скручивают пробег перед продажей. Понять это могут только опытные специалисты.'
    },
    {
        id: 2,
        title: 'Восстановленные',
        text: 'Такие автомобили опасны для жизни, т.к. восстанавливают их некачественно. Такие цены на них сильно завышены.'
    },
    {
        id: 3,
        title: 'Юридические проблемы',
        text: 'Кредиты, залоги, двойники и "перебитые", с спиливанием vin номеров, с запретами на постановку на учет.'
    },
    {
        id: 4,
        title: 'Скрытые дефекты',
        text: 'В 40% случаев продавцы скрывают пробег перед продажей. Понять это могут только опытные специалисты.'
    },
    {
        id: 5,
        title: 'Необслуживаемые',
        text: 'Для многих машин, что сейчас на рынке, нет запчастей. Либо запчасти стоят, как крыло от самолета.'
    },
    {
        id: 6,
        title: 'Завышенная цена',
        text: 'Многие продавцы необоснованно завышают цену на свой автомобиль. В таких случаях уместен торг.'
    }
]

export const SELECTED_CARS = [
    {
        id: 1,
        title: 'Hyundai Solaris, 1.4л, АКПП, 2018г.',
        description: 'Осмотр Hyundai Solaris, 1.4л, АКПП, 2018г.',
        mileage: '95,000 км',
        price: '950,000 руб.'
    },
    {
        id: 2,
        title: 'BMW 5 f10, 2.0л, бензин, АКПП, 2015г.',
        description: 'Осмотр BMW 5 f10, 2.0л, бензин, АКПП, 2015г.',
        mileage: '82,000 км',
        price: '1,870,000 руб.'
    },
    {
        id: 3,
        title: 'Hyundai Solaris, 1.6л, АКПП, 2017г.',
        description: 'Осмотр Hyundai Solaris, 1.6л, АКПП, 2017г.',
        mileage: '87,000 км',
        price: '1,050,000 руб.'
    },
    {
        id: 4,
        title: 'Volkswagen Tiguan, 2.0л, АТ, 2013г.',
        description: 'Осмотр Volkswagen Tiguan, 2.0л, АТ, 2013г.',
        mileage: '133,000 км',
        price: '1,100,000 руб.'
    },
    {
        id: 5,
        title: 'Hyundai Solaris, 1.4л, АКПП, 2018г.',
        description: 'Осмотр Hyundai Solaris, 1.4л, АКПП, 2018г.',
        mileage: '95,000 км',
        price: '950,000 руб.'
    },
    {
        id: 6,
        title: 'BMW 5 f10, 2.0л, бензин, АКПП, 2015г.',
        description: 'Осмотр BMW 5 f10, 2.0л, бензин, АКПП, 2015г.',
        mileage: '82,000 км',
        price: '1,870,000 руб.'
    },
    {
        id: 7,
        title: 'Hyundai Solaris, 1.6л, АКПП, 2017г.',
        description: 'Осмотр Hyundai Solaris, 1.6л, АКПП, 2017г.',
        mileage: '87,000 км',
        price: '1,050,000 руб.'
    },
    {
        id: 8,
        title: 'Volkswagen Tiguan, 2.0л, АТ, 2013г.',
        description: 'Осмотр Volkswagen Tiguan, 2.0л, АТ, 2013г.',
        mileage: '133,000 км',
        price: '1,100,000 руб.'
    }
]

export const WORKS_SCHEME = [
    {
        id: 1,
        title: 'Свяжитесь с нами',
        text: 'Позвоните или оставьте заявку, наш менеджер свяжется с Вами для уточнения деталей.'
    },
    {
        id: 2,
        title: 'Договор и предоплата',
        text: 'Составляем договор и после внесения депозита начинаем работать.'
    },
    {
        id: 3,
        title: 'Поиск и покупка авто',
        text: 'Подбираем автомобиль. Клиент оплачивает внос (стоимость авто + расходы по транспортировке).'
    },
    {
        id: 4,
        title: 'Доставка и получение',
        text: 'Отправляем автомобиль и документы в Ваш населенный пункт автовозом или по x/d.'
    }
]

export const REVIEWS = [
    {
        id: 1,
        title: 'Игорь, Наро-Фоминск',
        car: 'Honda Vezel',
        date: '18 Октября 2023',
        text: 'Добрый день! Хотел бы поделиться впечатлениями от работы с данной компанией. Для начала поиск фирмы занял у меня не долгое время, так как заказывал первый раз и особо не изучал рынок. После того как связался с Еленой, меня уверяли, что в мой бюджет можно привезти из Японии хороший Аукционный...'
    },
    {
        id: 2,
        title: 'Юрий, Краснодар',
        car: 'BMW X3',
        date: '03 Ноября 2023',
        text: 'Отличная компания. Обратился по рекомендации знакомого. Не пожалел ни разу. Все было на высшем уровне от начала до конца. Авто подбирали в Кореи и везли через Владивосток в Краснодар. Спасибо огромное за отличный автомобиль. Удачи вам и процветания!'
    }
]

export const QUESTIONS = [
    {
        id: 1,
        question: 'Как заказать автоподбор в Екатеринбурге?',
        answer: ''
    },
    {
        id: 2,
        question: 'Сколько стоит автоподбор машины с пробегом?',
        answer: ''
    },
    {
        id: 3,
        question: 'Нужен ли договор?',
        answer: ''
    },
    {
        id: 4,
        question: 'Требуется ли предоплата?',
        answer: ''
    },
    {
        id: 5,
        question: 'Что указывать для желаемого авто?',
        answer: ''
    }
]

export const BLOG_BLOCK = [
    {
        title: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру',
        text: 'При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным.',
        date: '18.11.2023',
        category: 'Блог'
    },
    {
        title: 'Идейные соображения высшего порядка и дальнейшее развитие',
        text: 'При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным.',
        date: '18.11.2023',
        category: 'Блог'
    },
    {
        title: 'Повседневная практика показывает, что рамки и место',
        text: 'Разнообразный и богатый опыт реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации систем массового участия',
        date: '18.11.2023',
        category: 'Блог'
    },
    {
        title: 'Укрепление и развитие структуры',
        text: 'При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным.',
        date: '18.11.2023',
        category: 'Блог'
    },
    {
        title: 'Рост и сфера нашей активности играет важную роль в формировании направлений прогрессивного развития',
        text: 'Значимость этих проблем настолько очевидна, что рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач',
        date: '18.11.2023',
        category: 'Блог'
    },
]

export const REVIEWS_PAGE = [
    {
        name: 'Николай Сметанкин',
        service: 'Осмотр Mazda CX-5, 2.0 л., бензин, АКПП 4wd., 2016г.',
        master: 'Иванов Иван Иванов',
        rating: 5,
        text: 'Добрый день! Спустя два месяца после покупки машины могу смело оставлять положительный отзыв) Обращаемся за подбором уже второй раз, работой ребят довольна на 100%. В СПб подбирал Павел, проверял Евгений. Я вообще ничего не делала, просто озвучила свои пожелания и бюджет. По ходу подбора, живых фото и советов подборщика мои пожелания и бюджет менялись, в итоге выбрали вариант с идеальным сочетанием цена/качество/пробег/год. Спасибо большое!'
    },
    {
        name: 'Николай Сметанкин',
        service: 'Осмотр Mazda CX-5, 2.0 л., бензин, АКПП 4wd., 2016г.',
        master: 'Иванов Иван Иванов',
        rating: 5,
        text: 'Добрый день! Спустя два месяца после покупки машины могу смело оставлять положительный отзыв) Обращаемся за подбором уже второй раз, работой ребят довольна на 100%. В СПб подбирал Павел, проверял Евгений. Я вообще ничего не делала, просто озвучила свои пожелания и бюджет. По ходу подбора, живых фото и советов подборщика мои пожелания и бюджет менялись, в итоге выбрали вариант с идеальным сочетанием цена/качество/пробег/год. Спасибо большое!'
    },
    {
        name: 'Николай Сметанкин',
        service: 'Осмотр Mazda CX-5, 2.0 л., бензин, АКПП 4wd., 2016г.',
        master: 'Иванов Иван Иванов',
        rating: 5,
        text: 'Добрый день! Спустя два месяца после покупки машины могу смело оставлять положительный отзыв) Обращаемся за подбором уже второй раз, работой ребят довольна на 100%. В СПб подбирал Павел, проверял Евгений. Я вообще ничего не делала, просто озвучила свои пожелания и бюджет. По ходу подбора, живых фото и советов подборщика мои пожелания и бюджет менялись, в итоге выбрали вариант с идеальным сочетанием цена/качество/пробег/год. Спасибо большое!'
    },
    {
        name: 'Николай Сметанкин',
        service: 'Осмотр Mazda CX-5, 2.0 л., бензин, АКПП 4wd., 2016г.',
        master: 'Иванов Иван Иванов',
        rating: 5,
        text: 'Добрый день! Спустя два месяца после покупки машины могу смело оставлять положительный отзыв) Обращаемся за подбором уже второй раз, работой ребят довольна на 100%. В СПб подбирал Павел, проверял Евгений. Я вообще ничего не делала, просто озвучила свои пожелания и бюджет. По ходу подбора, живых фото и советов подборщика мои пожелания и бюджет менялись, в итоге выбрали вариант с идеальным сочетанием цена/качество/пробег/год. Спасибо большое!'
    },
    {
        name: 'Николай Сметанкин',
        service: 'Осмотр Mazda CX-5, 2.0 л., бензин, АКПП 4wd., 2016г.',
        master: 'Иванов Иван Иванов',
        rating: 5,
        text: 'Добрый день! Спустя два месяца после покупки машины могу смело оставлять положительный отзыв) Обращаемся за подбором уже второй раз, работой ребят довольна на 100%. В СПб подбирал Павел, проверял Евгений. Я вообще ничего не делала, просто озвучила свои пожелания и бюджет. По ходу подбора, живых фото и советов подборщика мои пожелания и бюджет менялись, в итоге выбрали вариант с идеальным сочетанием цена/качество/пробег/год. Спасибо большое!'
    },
    {
        name: 'Николай Сметанкин',
        service: 'Осмотр Mazda CX-5, 2.0 л., бензин, АКПП 4wd., 2016г.',
        master: 'Иванов Иван Иванов',
        rating: 5,
        text: 'Добрый день! Спустя два месяца после покупки машины могу смело оставлять положительный отзыв) Обращаемся за подбором уже второй раз, работой ребят довольна на 100%. В СПб подбирал Павел, проверял Евгений. Я вообще ничего не делала, просто озвучила свои пожелания и бюджет. По ходу подбора, живых фото и советов подборщика мои пожелания и бюджет менялись, в итоге выбрали вариант с идеальным сочетанием цена/качество/пробег/год. Спасибо большое!'
    },
]

export const SELECT_SERVICES: { label: string; value: string }[] = [
    { label: 'Автоподбор легковых автомобилей', value: 'av-leg-avto' },
    { label: 'Автоподбор грузовых ТС', value: 'av-gruz-tc' },
    { label: 'Выездная диагностика автомобилей', value: 'vie-di-av' },
    { label: 'Выездная диагностика грузовых ТС', value: 'vie-di-ts' },
    { label: 'Сопровождение сделок', value: 'sop-cdel' },
    { label: 'Автоподбор мототехники', value: 'av-moto' },
]

export const SERVICE_BLOCK = [
    {
        title: 'Автоподбор. Автоэксперт. Честный автоподборщик',
        description: 'Диагностика авто перед покупкой',
        price: 'от 1 000р.',
        name: 'АНТОН ОЛЕГОВИЧ',
        rating: 5.0,
        reviews: 246,
        icon: People,
        text: 'Автоэксперт на день... от 8 000р. Автоподбор. Автоэксперт. Честный автоподборщик. Звоните Сразу! Выезжаю оперативно в течение часа, чтобы не пустить ваш вариант автомобиля, одновременно держу продавца на телефоне! На осмотр сразу выезжаю сам — без посредников! Консультация по телефону — бесплатно. Не работаю за оценку! Услуга для вас практически бесплатна — в 95% случаев стоимость моей работы окупается за счёт успешного аргументированного торга! До 85% всех автомобилей выкупают перекупщики, правую недостатки, а потом продают вам дороже!'
    },
    {
        title: 'Автоподбор. Автоэксперт. Честный автоподборщик',
        description: 'Диагностика авто перед покупкой',
        price: 'от 1 000р.',
        rating: 5.0,
        name: 'АНТОН ОЛЕГОВИЧ',
        icon: People,
        reviews: 246,
        text: 'Автоэксперт на день... от 8 000р. Автоподбор. Автоэксперт. Честный автоподборщик. Звоните Сразу! Выезжаю оперативно в течение часа, чтобы не пустить ваш вариант автомобиля, одновременно держу продавца на телефоне! На осмотр сразу выезжаю сам — без посредников! Консультация по телефону — бесплатно. Не работаю за оценку! Услуга для вас практически бесплатна — в 95% случаев стоимость моей работы окупается за счёт успешного аргументированного торга! До 85% всех автомобилей выкупают перекупщики, правую недостатки, а потом продают вам дороже!'
    },
    {
        title: 'Автоподбор. Автоэксперт. Честный автоподборщик',
        description: 'Диагностика авто перед покупкой',
        price: 'от 1 000р.',
        rating: 5.0,
        name: 'АНТОН ОЛЕГОВИЧ',
        reviews: 246,
        icon: People,
        text: 'Автоэксперт на день... от 8 000р. Автоподбор. Автоэксперт. Честный автоподборщик. Звоните Сразу! Выезжаю оперативно в течение часа, чтобы не пустить ваш вариант автомобиля, одновременно держу продавца на телефоне! На осмотр сразу выезжаю сам — без посредников! Консультация по телефону — бесплатно. Не работаю за оценку! Услуга для вас практически бесплатна — в 95% случаев стоимость моей работы окупается за счёт успешного аргументированного торга! До 85% всех автомобилей выкупают перекупщики, правую недостатки, а потом продают вам дороже!'
    }
]

export const ITEMS = [
    {
        id: 6857,
        slug: "avtopodbor_tolahinimer_chestniy_podbor",
        name: "Автоподбор. Толщиномер.Честный подбор",
        price: 1200,
        amount: 2,
        settings: {
            show_if_no_count: false
        },
        category: {
            id: 2273,
            name: "Автоподбор",
            slug: "avtopodbor",
            lft: 107,
            rht: 108,
            parent_id: 1886,
            ordinal_number: 4
        },
        warehouses: [],
        images: [
            {
                id: 28490,
                name: null,
                path: People,
                ItemImagesEntity: {
                    ordinal_number: 1
                }
            }

        ]
    },
    {
        id: 6858,
        slug: "avtopodbor_tolahinimer_chestniy_podbor",
        name: "Автоподбор. Толщиномер.Честный подбор",
        price: 1200,
        amount: 2,
        settings: {
            show_if_no_count: false
        },
        category: {
            id: 2273,
            name: "Автоподбор",
            slug: "avtopodbor",
            lft: 107,
            rht: 108,
            parent_id: 1886,
            ordinal_number: 4
        },
        warehouses: [],
        images: [
            {
                id: 28490,
                name: null,
                path: People,
                ItemImagesEntity: {
                    ordinal_number: 1
                }
            }

        ]
    }
]

export const ORDER_ITEMS = [
    {
        id: 80,
        order_number: "1744371256503541",
        user_id: 7,
        delivery_status: 2,
        delivery_method: 2,
        payment_status: 0,
        payment_method: 2,
        city_id: 1,
        street: "Эм. Алексеевой, 116, 664",
        zip_code: "656000",
        date_delivery: "2025-04-11T11:34:16.503Z",
        comments: [],
        createdAt: "2025-04-11T11:34:16.504Z",
        updatedAt: "2025-04-14T03:56:51.284Z",
        user: {
            id: 7,
            role: 3,
            email: "gg@mail.ru",
            password_hash: "$2b$10$mTdzI3nsnCmymS1DaRwdbuUaDIc05Fxrnyo3.QC/JiaUwwNfUdQWe",
            status: 1,
            name: "Мальцев Абат Олегович",
            phone: "89132441181",
            city_id: 1,
            street: "Эм. Алексеевой",
            house: "116",
            flat: "664",
            zip_code: "656000",
            telegram: null,
            createdAt: "2025-03-04T10:30:48.217Z",
            updatedAt: "2025-04-25T19:27:06.483Z"
        },
        orderItems: [
            {
                order_id: 80,
                item_id: 6857,
                count: 1,
                createdAt: "2025-04-11T11:34:16.509Z",
                updatedAt: "2025-04-11T11:34:16.509Z",
                item: {
                    id: 6857,
                    name: "Автоподбор. Автоэксперт. Честный автоподборщик",
                    slug: "regulyator_davleniyareduktor_propanovyi_odnostupenchatyi_redius_168",
                    price: 1200,
                    amount: 2,
                    description: "Малогабаритный пропановый редуктор выполнен по осевой схеме, за счет чего обладает компактными размерами при сохранении всех рабочих параметров на уровне крупногабаритных редукторов. Редуктор предназначен для понижения и регулирования давления газа (пропана), поступающего из баллона, и автоматического поддержания постоянного рабочего давления газа при питании постов и установок газовой сварки, резки, пайки и других технологических процессов.",
                    images: [
                        {
                            id: 28490,
                            name: null,
                            path: People,
                            ItemImagesEntity: {
                                ordinal_number: 1
                            }
                        },

                    ]
                }
            }
        ],
        city: {
            id: 1,
            country_id: 1,
            region_id: 61,
            name: "Кяхта",
            createdAt: "2024-04-10T16:31:00.398Z",
            updatedAt: "2024-04-10T16:31:00.398Z"
        }
    },
    {
        id: 80,
        order_number: "1744371256503541",
        user_id: 7,
        delivery_status: 3,
        delivery_method: 2,
        payment_status: 0,
        payment_method: 2,
        city_id: 1,
        street: "Эм. Алексеевой, 116, 664",
        zip_code: "656000",
        date_delivery: "2025-04-11T11:34:16.503Z",
        comments: [],
        createdAt: "2025-04-11T11:34:16.504Z",
        updatedAt: "2025-04-14T03:56:51.284Z",
        user: {
            id: 7,
            role: 3,
            email: "gg@mail.ru",
            password_hash: "$2b$10$mTdzI3nsnCmymS1DaRwdbuUaDIc05Fxrnyo3.QC/JiaUwwNfUdQWe",
            status: 1,
            name: "Мальцев Абат Олегович",
            phone: "89132441181",
            city_id: 1,
            street: "Эм. Алексеевой",
            house: "116",
            flat: "664",
            zip_code: "656000",
            telegram: null,
            createdAt: "2025-03-04T10:30:48.217Z",
            updatedAt: "2025-04-25T19:27:06.483Z"
        },
        orderItems: [
            {
                order_id: 80,
                item_id: 6857,
                count: 1,
                createdAt: "2025-04-11T11:34:16.509Z",
                updatedAt: "2025-04-11T11:34:16.509Z",
                item: {
                    id: 6857,
                    name: "Автоподбор. Автоэксперт. Честный автоподборщик",
                    slug: "regulyator_davleniyareduktor_propanovyi_odnostupenchatyi_redius_168",
                    price: 1200,
                    amount: 2,
                    description: "Малогабаритный пропановый редуктор выполнен по осевой схеме, за счет чего обладает компактными размерами при сохранении всех рабочих параметров на уровне крупногабаритных редукторов. Редуктор предназначен для понижения и регулирования давления газа (пропана), поступающего из баллона, и автоматического поддержания постоянного рабочего давления газа при питании постов и установок газовой сварки, резки, пайки и других технологических процессов.",
                    images: [
                        {
                            id: 28490,
                            name: null,
                            path: People,
                            ItemImagesEntity: {
                                ordinal_number: 1
                            }
                        },

                    ]
                }
            }
        ],
        city: {
            id: 1,
            country_id: 1,
            region_id: 61,
            name: "Кяхта",
            createdAt: "2024-04-10T16:31:00.398Z",
            updatedAt: "2024-04-10T16:31:00.398Z"
        }
    },
    {
        id: 80,
        order_number: "1744371256503541",
        user_id: 7,
        delivery_status: 4,
        delivery_method: 2,
        payment_status: 0,
        payment_method: 2,
        city_id: 1,
        street: "Эм. Алексеевой, 116, 664",
        zip_code: "656000",
        date_delivery: "2025-04-11T11:34:16.503Z",
        comments: [],
        createdAt: "2025-04-11T11:34:16.504Z",
        updatedAt: "2025-04-14T03:56:51.284Z",
        user: {
            id: 7,
            role: 3,
            email: "gg@mail.ru",
            password_hash: "$2b$10$mTdzI3nsnCmymS1DaRwdbuUaDIc05Fxrnyo3.QC/JiaUwwNfUdQWe",
            status: 1,
            name: "Мальцев Абат Олегович",
            phone: "89132441181",
            city_id: 1,
            street: "Эм. Алексеевой",
            house: "116",
            flat: "664",
            zip_code: "656000",
            telegram: null,
            createdAt: "2025-03-04T10:30:48.217Z",
            updatedAt: "2025-04-25T19:27:06.483Z"
        },
        orderItems: [
            {
                order_id: 80,
                item_id: 6857,
                count: 1,
                createdAt: "2025-04-11T11:34:16.509Z",
                updatedAt: "2025-04-11T11:34:16.509Z",
                item: {
                    id: 6857,
                    name: "Автоподбор. Автоэксперт. Честный автоподборщик",
                    slug: "regulyator_davleniyareduktor_propanovyi_odnostupenchatyi_redius_168",
                    price: 1200,
                    amount: 2,
                    description: "Малогабаритный пропановый редуктор выполнен по осевой схеме, за счет чего обладает компактными размерами при сохранении всех рабочих параметров на уровне крупногабаритных редукторов. Редуктор предназначен для понижения и регулирования давления газа (пропана), поступающего из баллона, и автоматического поддержания постоянного рабочего давления газа при питании постов и установок газовой сварки, резки, пайки и других технологических процессов.",
                    images: [
                        {
                            id: 28490,
                            name: null,
                            path: People,
                            ItemImagesEntity: {
                                ordinal_number: 1
                            }
                        },

                    ]
                }
            }
        ],
        city: {
            id: 1,
            country_id: 1,
            region_id: 61,
            name: "Кяхта",
            createdAt: "2024-04-10T16:31:00.398Z",
            updatedAt: "2024-04-10T16:31:00.398Z"
        }
    }
]

export const USER_DATA = [
    {
        id: 0,
        name: 'Anil',
        text: 'April fool’s day',
        lastTimeMessages: 'Sun Jan 12 2025 2:00:32 GMT+0700 (Новосибирск, стандартное время)',
        avatar: 'https://cs-erkon.pro/files/avatars/1692599353.jpg',
        read: 'true',
        status: "people"
    },
    {
        id: 1,
        name: 'Vicktor',
        text: 'Baag',
        lastTimeMessages: 'Sun Jan 12 2025 18:01:32 GMT+0700 (Новосибирск, стандартное время)',
        avatar: 'https://i.pinimg.com/736x/84/d5/b6/84d5b6753ac36dd8516ebf530031a7f8.jpg',
        read: 'false',
        status: "people"
    },
    {
        id: 2,
        name: 'Mary ma’am',
        text: 'You must report this because it is illegal.',
        lastTimeMessages: 'Sun Jan 12 2025 18:02:32 GMT+0700 (Новосибирск, стандартное время)',
        avatar: 'https://ae03.alicdn.com/kf/Sd44a6cac34c74db79a78ce7d4def7fb5w.jpg',
        read: 'false',
        status: "people"
    },
    {
        id: 3,
        name: 'Bill Gates',
        text: 'Nevermind bro',
        lastTimeMessages: 'Sun Jan 12 2025 18:03:32 GMT+0700 (Новосибирск, стандартное время)',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Visit_of_Bill_Gates%2C_Chairman_of_Breakthrough_Energy_Ventures%2C_to_the_European_Commission_5_%28cropped%29.jpg',
        read: 'false',
        status: "people"
    },
    {
        id: 4,
        name: 'Elon Musk',
        text: 'important',
        lastTimeMessages: 'Sun Jan 12 2025 18:04:32 GMT+0700 (Новосибирск, стандартное время)',
        avatar: 'https://www.ixbt.com/img/n1/news/2024/8/1/ixbtmedia_elon_musk_-_head_of_department_of_government_effici_110519e3-41b0-43ce-86a3-aadc930f4f75_1_large.png',
        read: 'false',
        status: "people"
    },
    {
        id: 5,
        text: 'Who are you',
        lastTimeMessages: 'Sun Jan 12 2025 18:05:32 GMT+0700 (Новосибирск, стандартное время)',
        avatar: 'https://i.pinimg.com/280x280_RS/a5/c8/6b/a5c86bb22f0cc8b58c2fd0ce7c52ef6e.jpg',
        read: 'true',
        status: "people"
    },
    {
        id: 6,
        name: 'Victoria H',
        text: 'Who are all these people???',
        lastTimeMessages: 'Sun Jan 12 2025 18:06:32 GMT+0700 (Новосибирск, стандартное время)',
        avatar: 'https://i.pinimg.com/280x280_RS/a5/c8/6b/a5c86bb22f0cc8b58c2fd0ce7c52ef6e.jpg',
        read: 'true',
        status: "people"
    },

]

export const GROUPS_DATA = [
    {
        id: 0,
        name: 'Friends Forever',
        lastText: 'Hahahahah!',
        avatar: 'https://i.pinimg.com/474x/d8/e0/58/d8e0587cedc5cc49a8d9043ca26712cf.jpg',
        creator: 'Victoria H',
        status: "group",
        text: [{
            id: 0,
            name: 'Anil',
            text: 'April fool’s day',
            lastTimeMessages: 'Sun Jan 12 2025 2:00:32 GMT+0700 (Новосибирск, стандартное время)',
            avatar: 'https://cs-erkon.pro/files/avatars/1692599353.jpg',
            read: 'true',
            status: "people"
        },
        {
            id: 1,
            name: 'Vicktor',
            text: 'Baag',
            lastTimeMessages: 'Sun Jan 12 2025 18:01:32 GMT+0700 (Новосибирск, стандартное время)',
            avatar: 'https://i.pinimg.com/736x/84/d5/b6/84d5b6753ac36dd8516ebf530031a7f8.jpg',
            read: 'false',
            status: "people"
        },
        {
            id: 2,
            name: 'Mary ma’am',
            text: 'You must report this because it is illegal.',
            lastTimeMessages: 'Sun Jan 12 2025 18:02:32 GMT+0700 (Новосибирск, стандартное время)',
            avatar: 'https://ae03.alicdn.com/kf/Sd44a6cac34c74db79a78ce7d4def7fb5w.jpg',
            read: 'false',
            status: "people"
        },
        {
            id: 3,
            name: 'Bill Gates',
            text: 'Nevermind bro',
            lastTimeMessages: 'Sun Jan 12 2025 18:03:32 GMT+0700 (Новосибирск, стандартное время)',
            avatar: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Visit_of_Bill_Gates%2C_Chairman_of_Breakthrough_Energy_Ventures%2C_to_the_European_Commission_5_%28cropped%29.jpg',
            read: 'false',
            status: "people"
        },
        {
            id: 4,
            name: 'Elon Musk',
            text: 'important',
            lastTimeMessages: 'Sun Jan 12 2025 18:04:32 GMT+0700 (Новосибирск, стандартное время)',
            avatar: 'https://www.ixbt.com/img/n1/news/2024/8/1/ixbtmedia_elon_musk_-_head_of_department_of_government_effici_110519e3-41b0-43ce-86a3-aadc930f4f75_1_large.png',
            read: 'false',
            status: "people"
        },
        {
            id: 5,
            text: 'Who are you',
            lastTimeMessages: 'Sun Jan 12 2025 18:05:32 GMT+0700 (Новосибирск, стандартное время)',
            avatar: 'https://i.pinimg.com/280x280_RS/a5/c8/6b/a5c86bb22f0cc8b58c2fd0ce7c52ef6e.jpg',
            read: 'true',
            status: "people"
        },
        {
            id: 6,
            name: 'Victoria H',
            text: 'Who are all these people???',
            lastTimeMessages: 'Sun Jan 12 2025 18:06:32 GMT+0700 (Новосибирск, стандартное время)',
            avatar: 'https://i.pinimg.com/280x280_RS/a5/c8/6b/a5c86bb22f0cc8b58c2fd0ce7c52ef6e.jpg',
            read: 'true',
            status: "people"
        },],
    },
]
export const ITEM_DATA =
{
    id: 6855,
    slug: "palatka_chetyrehmestnaya_s_tamburom_razmer_palatki_245215spalynoe_mestotambur110100_shirina245",
    name: "Автоподбор. Автоэксперт. Честный автоподборщик",
    price: 1000,
    amount: 1,
    createdAt: "2025-03-11T14:54:06.505Z",
    updatedAt: "2025-05-04T12:40:12.963Z",
    attribute_group_id: null,
    category_id: 2205,
    brand_id: null,
    rating: 5,
    status: 1,
    settings: {
        show_if_no_count: false
    },
    description: "    Данная палатка вмещает в себя 4-х человек, предназначена для походов, путешествий, организации кемпингов, рыбалки, охоты в разных погодных условиях. Габариты палатка отлично подойдут для размещения большой компании, а высота 180 см позволяет находиться внутри в полный рост. Палатка оборудована вентиляционными окнами и проклеенными швами, а на входе в спальное место установлена противомоскитная сетка. В конструкцию палатки входят большая внутренняя комната и огромный тамбур, свободно вмещающий , походную кухню и массивные рюкзаки. Материал внешнего тента и пола отлично защищает от влаги и ветра, а проклеенные швы не допускают проникновения внутрь палатки капель воды, а система вентиляции обеспечит нормальный воздухообмен. Палатка складывает в сумку, удобна при переноске и легко помещается в багажник машины.",
    vendor_code: "0f68d2c4-7338-11ef-85ad-94de80dac257",
    images: [
        {
            id: 28474,
            user_id: 1,
            name: null,
            path: People,
            createdAt: "2025-03-11T14:54:12.120Z",
            updatedAt: "2025-03-11T14:54:12.120Z",
            ItemImagesEntity: {
                image_id: 28474,
                item_id: 6855,
                ordinal_number: 1,
                shlack: null,
                createdAt: "2025-03-11T14:54:12.288Z",
                updatedAt: "2025-03-11T14:54:12.288Z"
            }
        },
        {
            id: 28475,
            user_id: 1,
            name: null,
            path: People,
            createdAt: "2025-03-11T14:54:12.120Z",
            updatedAt: "2025-03-11T14:54:12.120Z",
            ItemImagesEntity: {
                image_id: 28474,
                item_id: 6855,
                ordinal_number: 3,
                shlack: null,
                createdAt: "2025-03-11T14:54:12.288Z",
                updatedAt: "2025-03-11T14:54:12.288Z"
            }
        },
        {
            id: 28476,
            user_id: 1,
            name: null,
            path: People,
            createdAt: "2025-03-11T14:54:12.120Z",
            updatedAt: "2025-03-11T14:54:12.120Z",
            ItemImagesEntity: {
                image_id: 28474,
                item_id: 6855,
                ordinal_number: 1,
                shlack: null,
                createdAt: "2025-03-11T14:54:12.288Z",
                updatedAt: "2025-03-11T14:54:12.288Z"
            }
        }
    ],
    category: {
        id: 2205,
        user_id: 1,
        status: 1,
        slug: "palatki-letnie",
        name: "Палатки летние",
        title: "Палатки летние",
        description: "Палатки летние",
        meta_description: "Палатки летние",
        createdAt: "2024-12-11T01:51:19.068Z",
        updatedAt: "2025-05-04T01:46:26.798Z"
    },
    item1c: {
        id: 641,
        item_id: "0f68d2c4-7338-11ef-85ad-94de80dac257",
        barcode: "2000721270353",
        name: "Палатка четырехместная с тамбуром, размер палатки 245*215(спальное место),тамбур:110+100, ширина245",
        default_meaning: {
            name: "шт",
            additional_info: {
                code: "796 ",
                fullname: "Штука",
                international_abbreviation: "PCE"
            }
        },
        status: "не удален",
        prices: [
            {
                price: "11000.00",
                ratio: "1",
                currency: "руб",
                priceType: {
                    id: "c6089c8c-e475-11e6-ab07-94de8008860f",
                    name: "Розничная",
                    currency: "руб",
                    taxation: {
                        name: "НДС",
                        includedInTheTotal: "false"
                    }
                },
                fullString: "11 000 руб. за шт",
                meaningName: "шт"
            },
            {
                price: "11000.00",
                ratio: "1",
                currency: "руб",
                priceType: {
                    id: "d479acc8-76e4-11ee-b406-902b3479525b",
                    name: "Цена для WB",
                    currency: "руб",
                    taxation: {
                        name: "НДС",
                        includedInTheTotal: "false"
                    }
                },
                fullString: "11 000 руб. за шт",
                meaningName: "шт"
            },
            {
                price: "11000.00",
                ratio: "1",
                currency: "руб",
                priceType: {
                    id: "3bfcd8a2-d58c-11eb-bae7-902b3479525b",
                    name: "Цена для озона",
                    currency: "руб",
                    taxation: {
                        name: "НДС",
                        includedInTheTotal: "false"
                    }
                },
                fullString: "11 000 руб. за шт",
                meaningName: "шт"
            },
            {
                price: "10000.00",
                ratio: "1",
                currency: "руб",
                priceType: {
                    id: "a4239a47-e6a7-11e6-bb67-b8975a5f783b",
                    name: "Закупочная",
                    currency: "руб",
                    taxation: {
                        name: "НДС",
                        includedInTheTotal: "false"
                    }
                },
                fullString: "10 000 руб. за шт",
                meaningName: "шт"
            }
        ],
        retail_price: 11000,
        count: 1,
        section: 1,
        createdAt: "2025-03-25T04:50:58.398Z",
        updatedAt: "2025-05-04T12:40:06.391Z"
    }
}
