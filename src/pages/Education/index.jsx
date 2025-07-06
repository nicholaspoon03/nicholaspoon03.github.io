import Card from '../../components/Card';
import PageScaffold from '../../components/PageScaffold';
import './style.css';

function Education() {
    return (
        <PageScaffold pageName="Education" pageContent={() => (
            <div className="page-layout card-spacing">
                <Card cardContent={() => (
                    <div>
                        <b id="uni-title" className="centre-page-content">University of Toronto, Toronto, Ontario, Canada</b>
                        <p className="centre-page-content">HBSc, Computer Science Specialist, Mathematics Minor</p>
                        <p className="centre-page-content">2021 - 2026 (Expected)</p>

                        <div id="learn-more-cs-div" className="centre-page-content">
                            <a className="button" href="https://web.cs.toronto.edu/" target="_blank" rel="noreferrer noopener">
                                Learn More
                            </a>
                        </div>
                    </div>
                )} />

                <Card cardContent={() => (
                    <div id="uni-focuses-programs" className="centre-page-content">
                        <a href="https://artsci.calendar.utoronto.ca/program/asfoc1689b" target="_blank" rel="noreferrer noopener">
                            <p>Artificial Intelligence Focus</p>
                        </a>
                        <a href="https://artsci.calendar.utoronto.ca/program/asfoc1689f" target="_blank" rel="noreferrer noopener">
                            <p>Computer Systems Focus</p>
                        </a>
                        <a href="https://artsci.calendar.utoronto.ca/program/asfoc1689d" target="_blank" rel="noreferrer noopener">
                            <p>Computer Vision Focus</p>
                        </a>
                        <a href="https://www.artsci.utoronto.ca/current/experiential-learning/internships/asip" target="_blank" rel="noreferrer noopener">
                            <p>Arts and Science Internship Program</p>
                        </a>
                        <a href="https://www.artsci.utoronto.ca/current/experiential-learning/research-opportunities/research-opportunities-program" target="_blank" rel="noreferrer noopener">
                            <p>Research Opportunity Program</p>
                        </a>
                    </div>
                )} />

                <Card cardContent={() => (
                    <div>
                        <b className="centre-page-content subheading">Achievements</b>
                        <ul className="surround">
                            <li>Dean's List of Scholars 2021-2022, 2022-2023, 2023-2024</li>
                        </ul>
                    </div>
                )} />

                <Card cardContent={() => (
                    <div>
                        <b className="centre-page-content subheading">Relevant Coursework</b>

                        <ul className="surround">
                            <li>Algorithms and Data Structures</li>
                            <li>Software Design</li>
                            <li>Web Programming</li>
                        </ul>

                        <b>Computer Systems Courses</b>
                        <ul className="surround">
                            <li>Operating Systems</li>
                            <li>Introduction to Databases</li>
                            <li>Parallel Programming</li>
                            <li>Computer Networking Systems</li>
                            <li>Computer Organization</li>
                            <li>Principles of Programming Languages</li>
                        </ul>

                        <b>Artificial Intelligence and Machine Learning Courses</b>
                        <ul className="surround">
                            <li>Neural Networks and Deep Learning</li>
                            <li>Computational Linguistics</li>
                            <li>Introduction to Image Understanding</li>
                            <li>Introduction to Visual Computing</li>
                            <li>Introduction to Machine Learning</li>
                            <li>Introduction to Artificial Intelligence</li>
                        </ul>
                    </div>
                )} />
            </div>
        )} />
    )
}

export default Education;
