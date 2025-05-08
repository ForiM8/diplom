import { FormatDate } from "./formatDate";

export async function withErrorHandler(
    fn: () => Promise<{ result?: any; error?: any }>
) {
    try {
        const res = await fn()

        if (!res?.result) {
            console.log('error client', res.error)

            return {
                data: null,
                error: {
                    message: res.error.message || 'Ошибка без сообщения',
                    status: res.error.statusCode || 'Статус неизвестен',
                    timestamp: res.error.timestamp
                        ? FormatDate(new Date(res.error.timestamp))
                        : 'Некорректная дата',
                },
            }
        }

        return {
            data: res,
            error: { message: '', status: '', timestamp: '' },
        }
    } catch (error) {
        console.log('error client', error)

        return {
            data: null,
            error: {
                message: 'Неизвестная ошибка',
                status: 'нет данных',
                timestamp: new Date().toISOString(),
            },
        }
    }
}
