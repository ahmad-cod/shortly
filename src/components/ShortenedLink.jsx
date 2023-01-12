import { useState, useEffect } from "react"

export default function ShortenedLink({ data }) {
    const [copied, setCopied] = useState(false)

    const copyLink = () => {
        navigator.clipboard.writeText(data.full_short_link)
        .then(() => setCopied(true))
    }

    useEffect(() => {
      if(!copied) return;

      const timeout = setTimeout(() => {
        setCopied(false)
      }, 4000)
    
      return () => {
        clearTimeout(timeout)
      }
    }, [copied])
    

    return (
        <div className="short-link-container">
            <a className="original-link" href={data.original_link} target="_blank" rel="noopener noreferrer">
                {data.original_link}
            </a>
            <div className="full_short_link flex">
                <a className="short-link" href={data.full_short_link} target="_blank" rel="noopener noreferrer">
                    {data.full_short_link}
                </a>
                <button className={`cta ${copied && 'copied'}`} onClick={copyLink}>
                    {!copied ? 'Copy' : 'Copied!'}
                </button>
            </div>
        </div>
    )
}