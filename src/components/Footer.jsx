export default function Footer() {
    return (
        <footer className="footer">
                <img src="../src/assets/images/logo.svg" alt="Logo" />
            <div className="features">
                <h5>Features</h5>
                <ul>
                    <li>Link Shortening</li>
                    <li>Branded Links</li>
                    <li>Analytics</li>
                </ul>
            </div>
            <div className="resources">
                <h5>Resources</h5>
                <ul>
                    <li>Blog</li>
                    <li>Developers</li>
                    <li>Support</li>
                </ul>
            </div>
            <div className="company">
                <h5>Company</h5>
                <ul>
                    <li>About</li>
                    <li>Our Team</li>
                    <li>Careers</li>
                    <li>Contact</li>
                </ul>
            </div>
        </footer>
    )
}