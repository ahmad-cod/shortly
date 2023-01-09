
function SocialLinks() {
    return (
        <div className="social">
            <a href="#">
                <img src="../src/assets/images/icon-facebook.svg" alt="Facebook" />
            </a>
            <a href="#">
                <img src="../src/assets/images/icon-twitter.svg" alt="Twitter" />
            </a>
            <a href="#">
                <img src="../src/assets/images/icon-pinterest.svg" alt="Pinterest" />
            </a>
            <a href="#">
                <img src="../src/assets/images/icon-instagram.svg" alt="Instagram" />
            </a>
        </div>
    )
}
export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-logo">Shortly</div>
            <div className="features">
                <h4>Features</h4>
                <ul>
                    <li>Link Shortening</li>
                    <li>Branded Links</li>
                    <li>Analytics</li>
                </ul>
            </div>
            <div className="resources">
                <h4>Resources</h4>
                <ul>
                    <li>Blog</li>
                    <li>Developers</li>
                    <li>Support</li>
                </ul>
            </div>
            <div className="company">
                <h4>Company</h4>
                <ul>
                    <li>About</li>
                    <li>Our Team</li>
                    <li>Careers</li>
                    <li>Contact</li>
                </ul>
            </div>
            <SocialLinks />
        </footer>
    )
}