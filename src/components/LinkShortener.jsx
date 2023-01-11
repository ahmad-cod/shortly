
export default function LinkShortener() {
    function handleSubmit(e) {
        e.preventDefault()
        console.log('Link Submitted')
    }
    return (
        <form className="link-shortener" onSubmit={handleSubmit}>
            <input type="text" placeholder="Shorten a link here..." />
            <button type="submit">Shorten it!</button>
        </form>
    )
}