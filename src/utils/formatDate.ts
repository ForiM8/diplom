export const FormatDate = (dateObject: Date) => {
    const datePart = dateObject.toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })
    const timePart = dateObject.toLocaleTimeString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    })

    const capitalizedDate = datePart.charAt(0).toUpperCase() + datePart.slice(1)

    return `${capitalizedDate}, ${timePart}`
}
