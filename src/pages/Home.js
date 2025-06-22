import 'bootstrap-icons/font/bootstrap-icons.css';

function Home() {
    return (
        <main>
            <div className="home-content">
                <div style={{ height: '40px' }} />
                <h1 className="home-text">Nicholas Poon</h1>
                <span className="home-text">Mobile Engineering Intern @ Mozilla | Computer Science @ University of Toronto</span>
                <div className="location-row home-text">
                    <i className="bi bi-geo-alt-fill"></i>
                    <div style={{ width: '3px' }} />
                    <p1>Toronto, ON, CA</p1>
                </div>

                <div style={{ height: '40px' }} />
                
                <div className="home-text">
                    <a href="https://github.com/nicholaspoon03" target="_blank" rel="noreferrer">
                        <i className="bi bi-github social-media-icons"></i>
                    </a>

                    <div style={{ width: '50px' }} />

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
            </div>
        </main>
    )
}

export default Home;
