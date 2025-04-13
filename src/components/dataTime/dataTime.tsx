import Icn1 from '@/assets/images//icn1.png'
import Icn2 from '@/assets/images//icn2.png'
import Icn3 from '@/assets/images//icn3.png'
import Icn4 from '@/assets/images//icn4.png'
import Icn5 from '@/assets/images//icn5.png'
import Icn6 from '@/assets/images//icn6.png'
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
