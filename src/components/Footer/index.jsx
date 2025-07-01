import GitHubIcon from '../GitHubIcon';
import LinkedInIcon from '../LinkedInIcon';
import './style.css';

function Footer() {
    return (
        <div id="footer-icons-div" className="site-scaffold-background">
            <GitHubIcon className="footer-icons" />
            <LinkedInIcon className="footer-icons" />
        </div>
    )
}

export default Footer;
