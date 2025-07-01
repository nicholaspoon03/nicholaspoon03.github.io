import JobCard from '../../components/JobCard';
import PageScaffold from '../../components/PageScaffold';

function Experience() {
    return (
        <PageScaffold pageName="Experience" pageContent={() => (
            <div className="page-layout">

                <h2>Professional Experience</h2>

                <div className="card-spacing">
                    <JobCard
                        company="Mozilla"
                        positionToDuration={{"Mobile Engineering Intern": "May 2024 - Present"}}
                        location="Toronto, ON, CAN"
                        tags="Android, Kotlin, Python, Jetpack Compose, CI tools, Redux, Open source, Git, Phabricator, GitHub, Firebase, Emulator, Android Studio, Figma"
                        description={() => (
                            <ul>
                                <li><b>Improved Firefox-Android app performance by over 15%</b> by generating baseline profiles for critical user journeys and
                                    integrating them into CI, by using <b>UIAutomator</b>, <b>Taskcluster</b>, <b>Macrobenchmark tests</b>, and <b>Firebase test lab</b>,
                                    benefitting <b>100 million+</b> Firefox-Android users
                                </li>
                                <li>
                                    Revamped Firefox-Android downloads by adding live downloads with the option to pause, resume, cancel, and retry on the
                                    downloads screen, and more, benefitting <b>10 million+</b> daily users and responding to one of our top user complaints
                                </li>
                                <li>
                                    Made multiple debug tools for Firefox-Android, including one with Mozilla Glean APIs and <b>Redux</b> that allows test metric
                                    pings to be sent for experimentation and testing, benefitting over <b>100</b> engineers
                                </li>
                                <li>
                                    Worked on the Firefox-Android tab strip project to <b>enhance large screen support</b> for our users and worked on Firefox-Android
                                    tabs tray refresh to follow Google Material 3 guidelines, <b>improve user experience</b>, and increase functionality
                                </li>
                                <li>
                                    Worked with design teams and followed <b>Figma</b> prototypes to implement reusable, custom TextField, Dropdown, and
                                    Snackbar <b>Android Components</b> using <b>Kotlin</b> and <b>Jetpack Compose</b> for our <b>open source</b> codebase
                                </li>
                                <li>
                                    <b>Mentored</b> an intern by sharing my knowledge and experience and <b>led</b> their project for Firefox-Android WebCompat Reporter
                                    improvements, to improve the quality of reports and benefit <b>15</b> engineers and our users, indirectly; my responsibilities
                                    included <b>project scoping</b>, <b>code reviews</b>, <b>working with our UX, Product, and QA teams to prioritize work and discuss feasibility</b>,
                                    and <b>code pairing</b>
                                </li>
                            </ul>
                        )}
                    />
                </div>

                <h2>Other Experience</h2>
                
                <div className="card-spacing">
                    <JobCard
                        company="Engineering For Kids York Region"
                        positionToDuration={{
                            "Lead Teacher": "Sept. 2022 - Aug. 2023",
                            "Assistant Teacher": "April 2022 - Aug. 2022"
                        }}
                        location="Richmond Hill, ON, CAN"
                        tags={null}
                        description={() => (
                            <ul>
                                <li>
                                    Took on a <b>leadership</b> role to teach STEM related lessons and guide students through activities, using my orgnizational, teamwork, and time
                                    management skills
                                </li>
                                <li>Paid <b>close attention to detail</b> to observe the students in the class</li>
                                <li><b>Mentored</b> new employees by sharing my teaching experience and lesson knowledge</li>
                            </ul>
                        )}
                    />

                    <JobCard
                        company="Elections Ontario"
                        positionToDuration={{"Tabulator Deputy Returning Officer": "June 2022 - June 2022"}}
                        location="Richmond Hill, ON, CAN"
                        tags={null}
                        description={() => (
                            <ul>
                                <li>Used my <b>quick learning abilities</b> to learn my job responsibilities with only one training session</li>
                                <li>
                                    Fed the ballots into the tabulator and printed the results at the end of the day, gaining experience working in a fast-paced environment and
                                    improving my interpersonal communication skills.
                                </li>
                            </ul>
                        )}
                    />

                    <JobCard
                        company="Self-employed"
                        positionToDuration={{"Tutor": "Oct. 2021 - June 2022, Mar. 2025 - Present"}}
                        location="Remote"
                        tags={null}
                        description={() => (
                            <ul>
                                <li>
                                    Enhanced my explanation and communication skills by explaining concepts in a clear and concise way.
                                </li>
                                <li>
                                    I was able to help one of my students improve their grade 11 math grade by <b>20%</b>.
                                </li>
                            </ul>
                        )}
                    />
                </div>

                <h2>Work in progress...</h2>
            </div>
        )} />
    )
}

export default Experience;