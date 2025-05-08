export const ErrorObjectSetup = async (res: Response) => {
    if (!res.ok) {
        let errorData

        try {
            const errorResponse = await res.json()

            errorData = {
                statusCode: res.status,
                timestamp: errorResponse.timestamp || new Date().toISOString(),
                message: errorResponse.message || `Ошибка запроса (${res.status})`,
                error: errorResponse.error || res.statusText || 'Unknown Error',
            }
        } catch {
            errorData = {
                statusCode: res.status,
                timestamp: new Date().toISOString(),
                message: `Ошибка запроса (${res.status})`,
                error: res.statusText || 'Unknown Error',
            }
        }

        return { error: errorData }
    }
}
