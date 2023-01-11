import { useRef } from "react"
import logo from "../assets/images/logo.svg"

export default function Navbar() {
    const toggleRef = useRef(null)
    const navRef = useRef(null)

    function toggleNav() {
        const visibility = navRef.current.getAttribute('data-visible')
        if(visibility === 'false') {
            navRef.current.setAttribute('data-visible', true)
            toggleRef.current.setAttribute('aria-expanded', true)
        }else {
            navRef.current.setAttribute('data-visible', false)
            toggleRef.current.setAttribute('aria-expanded', false)
        }

        console.log(visibility)
    }

    return (
        <header className="">
            <div className="banner">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <button
                    className="mobile-nav-toggle"
                    aria-label="Menu" aria-controls="nav" aria-expanded='false' 
                    ref={toggleRef}
                    onClick={toggleNav}
                >
                </button>
            </div>
            <nav id="nav" data-visible='false' ref={navRef}>
                    <ul className="left-links">
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Resources</li>
                    </ul>

                    <ul className="right-links">
                        <li>Login</li>
                        <li className="cta">Sign Up</li>
                    </ul>
            </nav>
        </header>
    )
}