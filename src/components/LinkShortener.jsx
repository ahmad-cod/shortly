import { useEffect, useState } from "react"
import ShortenedLink from "./ShortenedLink"

export default function LinkShortener() {
    const getLStoredinks = JSON.parse(localStorage.getItem('links')) || []
    const [url, setUrl] = useState('')
    const [links, setLinks] = useState(getLStoredinks)
    const [error, setError] = useState(false)

    useEffect(() => {
        localStorage.setItem('links', JSON.stringify(links))
    }, [links])

    function handleSubmit(e) {
        e.preventDefault()
        if(url.replaceAll(' ', '') == '') {
            setError(true)
            return
        }else {
            fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
                .then(res => res.json())
                .then(data => {
                    data.ok ? setLinks([...links, data.result]) : setError(true)
                })
                console.log(links)
        }
        setUrl('')
    }
    return (
        <div className="shorten-url-container">
            <form className="link-shortener" onSubmit={handleSubmit}>
                <div className="relative">
                    <input
                    type="text"
                    placeholder="Shorten a link here..."
                    className={error ? 'red' : 'border-transparent'}
                    value={url}
                    onFocus={() => setError(false)}
                    onChange={e => setUrl(e.target.value)}
                    />
                    <span
                        className={`error-message ${error ? 'show' : 'hide'}`}
                    >
                        Please Input a valid Url...
                    </span>
                </div>
                <button type="submit" className="cta">Shorten it!</button>
            </form>
            <div className="short-links" aria-live={(links.length !== 0) ? "polite" : 'off'}>
                {
                    (links.length !== 0) && links.map(link => <ShortenedLink key={links.indexOf(link)} data={link} />)
                }
            </div>
        </div>

    )
}