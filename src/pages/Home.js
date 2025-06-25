import 'bootstrap-icons/font/bootstrap-icons.css';
import portrait from '../assets/portrait.jpg'

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
                
                <div className="location-row small-margin centre-page-content">
                    <i className="bi bi-geo-alt-fill"></i>
                    <div style={{ width: '3px' }} />
                    <p1>Toronto, ON, CA</p1>
                </div>

                <div style={{ height: '40px' }} />
                
                <div id="social-media-div" className="centre-page-content">
                    <a href="https://github.com/nicholaspoon03" target="_blank" rel="noreferrer">
                        <i className="bi bi-github social-media-icons"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/nicholas-poon/" target="_blank" rel="noreferrer">
                        <i className="bi bi-linkedin social-media-icons"></i>
                    </a>
                </div>

                <div style={{ height: '40px' }} />

                <p>Hello! My name is Nicholas Poon and I am a fourth year computer science specialist and math minor at the
                    University of Toronto. I am currently a software engineer intern on the Android team at Mozilla, working
                    on Firefox for Android. Previously, I was an undergraduate research assistant at the Matter Lab, working
                    on the AI for Discovery and Self-Driving Labs project.</p>

                <p>Outside of work, I like cars, Formula One, badminton, skiing, and snowboarding.</p>

                <div style={{ height: '50px' }} />
            </div>
        </main>
    )
}

export default Home;
