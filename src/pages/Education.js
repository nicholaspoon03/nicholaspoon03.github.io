import PageScaffold from "../components/PageScaffold";

function Education() {
    return (
        <PageScaffold pageName="Education" pageContent={() => (
            <div className="page-layout">
                <div className="card">
                    <div className="centre-page-content column card-content">
                        <b id="uni-title" className="centre-page-content">University of Toronto, Toronto, Ontario, Canada</b>
                        <p className="centre-page-content">HBSc, Computer Science Specialist, Mathematics Minor</p>
                    </div>
                </div>

                <div className="card">
                    <div className="centre-page-content column card-content">
                        <ul className="surround left-padding">
                            <li>Artificial Intelligence Focus</li>
                            <li>Computer Systems Focus</li>
                            <li>Computer Vision Focus</li>
                            <li>Arts and Science Internship Program</li>
                            <li>Research Opportunity Program</li>
                        </ul>
                    </div>
                </div>

                <div className="card">
                    <div className="centre-page-content column card-content">
                        <b className="centre-page-content subheading">Relevant Coursework</b>

                        <b>Computer Systems Courses</b>
                        <ul className="surround left-padding">
                            <li>Operating Systems</li>
                            <li>Introduction to Databases</li>
                            <li>Parallel Programming</li>
                            <li>Computer Networking Systems</li>
                            <li>Computer Organization</li>
                            <li>Principles of Programming Languages</li>
                        </ul>

                        <b>Artificial Intelligence and Machine Learning Courses</b>
                        <ul className="surround left-padding">
                            <li>Neural Networks and Deep Learning</li>
                            <li>Computational Linguistics</li>
                            <li>Introduction to Image Understanding</li>
                            <li>Introduction to Visual Computing</li>
                            <li>Introduction to Machine Learning</li>
                            <li>Introduction to Artificial Intelligence</li>
                        </ul>

                        <b>Other Important Courses</b>
                        <ul className="surround left-padding">
                            <li>Algorithms and Data Structures</li>
                            <li>Software Design</li>
                            <li>Web Programming</li>
                        </ul>
                    </div>
                </div>
            

                <div className="card">
                    <div className="centre-page-content column card-content">
                        <p>Artificial Intelligence Focus, Computer Systems Focus, Computer Vision Focus, Arts and Science Internship Program, Research Opportunity Program</p>
                        <p>Dean's List of Scholars in 2021-2022, 2022-2023, 2023-2024</p>
                        <p>Relevant coursework</p>
                    </div>
                </div>
            </div>
        ) } />
    )
}

export default Education;
