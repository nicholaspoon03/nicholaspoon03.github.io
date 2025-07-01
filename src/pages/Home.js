import 'bootstrap-icons/font/bootstrap-icons.css';
import portrait from '../assets/portrait.jpg'
import GitHubIcon from '../components/GitHubIcon';
import LinkedInIcon from '../components/LinkedInIcon';

function Home() {
    return (
        <main>
            <div className="page-layout column">
                <div style={{ height: '150px' }} />

                <div className="centre-page-content small-margin">
                    <img id="portrait" src={portrait} alt="portrait"></img>
                </div>
                <h1 id="page-name" className="centre-page-content small-margin">Nicholas Poon</h1>
                <span className="centre-page-content small-margin">Mobile Engineering Intern @ Mozilla | Computer Science @ University of Toronto</span>
                
                <div className="row small-margin centre-page-content preceding-icon">
                    <i className="bi bi-geo-alt-fill"></i>
                    <p>Toronto, ON, CA</p>
                </div>

                <div style={{ height: '40px' }} />
                
                <div id="social-media-div" className="centre-page-content">
                    <GitHubIcon className="home-social-media-icons" />
                    <LinkedInIcon className="home-social-media-icons" />
                </div>

                <div style={{ height: '40px' }} />

                <p>Hello! My name is Nicholas Poon and I am a fourth year computer science specialist and math minor at the
                    University of Toronto. I am currently a software engineer intern on the Android team at Mozilla, working
                    on Firefox for Android. Previously, I was an undergraduate research assistant at the Matter Lab, working
                    on the AI for Discovery and Self-Driving Labs project.</p>

                <p>Outside of work, I like cars, Formula One, badminton, skiing, and snowboarding.</p>
            </div>
        </main>
    )
}

export default Home;
