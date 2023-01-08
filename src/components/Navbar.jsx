
export default function Navbar() {
    return (
        <header className="">
            <div className="logo">
                <img src="../src/assets/images/logo.svg" alt="Logo" />
            </div>
            <button className="mobile-nav-toggle" aria-label="Menu" aria-controls="nav" aria-expanded='false'>
            </button>
            <nav id="nav" data-visible='false'>
                    <ul className="left-links">
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Resources</li>
                    </ul>

                    <ul className="right-links">
                        <li>Login</li>
                        <li>Sign Up</li>
                    </ul>
            </nav>
        </header>
    )
}