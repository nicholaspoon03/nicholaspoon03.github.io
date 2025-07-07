import 'bootstrap-icons/font/bootstrap-icons.css';
import portrait from '../../assets/portrait.jpg'
import GitHubIcon from '../../components/GitHubIcon';
import LinkedInIcon from '../../components/LinkedInIcon';
import IconText from '../../components/IconText';
import './style.css';

function Home() {
    return (
        <main>
            <div className="page-layout column">
                <div id="home-page-top-padding" />

                <div className="centre-page-content small-margin">
                    <img id="portrait" src={portrait} alt="portrait"></img>
                </div>
                <h1 id="my-name" className="centre-page-content small-margin">Nicholas Poon</h1>
                <span className="centre-page-content small-margin">Mobile Engineering Intern @ Mozilla | Computer Science @ University of Toronto</span>
                
                <IconText
                    iconClassName="bi bi-geo-alt-fill"
                    className="small-margin centre-page-content"
                    textContent={() => (
                        <p>Toronto, ON, CA</p>
                    )}
                />

                <div id="home-page-section-padding" />
                
                <div id="social-media-div" className="centre-page-content">
                    <GitHubIcon className="home-social-media-icons" />
                    <LinkedInIcon className="home-social-media-icons" />
                </div>

                <div id="home-page-section-padding" />

                <p>Hello! My name is Nicholas Poon and I am a fourth year student, specializing in computer science and minoring in mathematics at the
                    University of Toronto. I am currently a software engineer intern on the Android team at Mozilla, working
                    on Firefox for Android. Previously, I was an undergraduate research assistant at the Matter Lab, working
                    on the AI for Discovery and Self-Driving Labs project.</p>

                <p>Outside of work, I like cars, Formula One, badminton, skiing, and snowboarding.</p>
            </div>
        </main>
    )
}

export default Home;
