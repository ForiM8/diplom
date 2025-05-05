export function removeTags(text: string) {
    return <p dangerouslySetInnerHTML={{ __html: text }}></p>
}