import { useEffect, useState } from "react"

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
        <form className="link-shortener" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Shorten a link here..."
            
              value={url}
              onFocus={() => setError(false)}
              onChange={e => setUrl(e.target.value)}
            />
            <button type="submit" className="cta">Shorten it!</button>
        </form>
    )
}