import facebookIcon from "../assets/images/icon-facebook.svg" 
import twitterIcon from "../assets/images/icon-twitter.svg"
import pinterestIcon from "../assets/images/icon-pinterest.svg"
import instagramIcon from "../assets/images/icon-instagram.svg"

function SocialLinks() {
    return (
        <div className="social">
            <a href="#">
                <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="#">
                <img src={twitterIcon} alt="Twitter" />
            </a>
            <a href="#">
                <img src={pinterestIcon} alt="Pinterest" />
            </a>
            <a href="#">
                <img src={instagramIcon} alt="Instagram" />
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