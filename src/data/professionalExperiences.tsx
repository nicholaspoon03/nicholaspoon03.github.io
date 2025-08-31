import { Experience } from "../models/Experience";

export const professionalExperiences: Experience[] = [
    {
        company: "Mozilla",
        positionToDuration: {
            "Mobile Engineering Intern": "May 2024 - Aug. 2025"
        },
        location: "Toronto, ON, CAN",
        tags: ["Android", "Kotlin", "Python", "Jetpack Compose", "CI tools", "JUnit", "Android Espresso", "Sentry", "Redux", "Open source", "Git", "Phabricator", "GitHub", "Firebase",
            "Emulator", "Android Studio", "Figma", "Software Development Lifecycle", "Security", "Profiling", "Debugging", "Design patterns", "Mentorship"
        ],
        description: (
            <ul>
                <li><b>Improved Firefox-Android app performance by over 15%</b> by generating baseline profiles for critical user journeys and
                    integrating them into CI, by using <b>UIAutomator</b>, <b>Taskcluster</b>, <b>Macrobenchmark tests</b>, and <b>Firebase test lab</b>,
                    benefitting <b>100 million+</b> Firefox-Android users
                </li>
                <li>
                    Revamped Firefox-Android downloads by adding live downloads with the option to pause, resume, cancel, and retry on the
                    downloads screen, by using <b>object-oriented programming</b> concepts, <b>Kotlin flow</b>, and <b>coroutines</b>, benefitting <b>10 million+</b> daily users and responding to one of our top user complaints
                </li>
                <li>
                    Made multiple debug tools for Firefox-Android, including one that allows test metric pings to be sent for experimentation and testing, using <b>Redux</b>, <b>DataStore</b>, and <b>SharedPreferences</b>, benefitting
                    over <b>100</b> engineers
                </li>
                <li>
                    Worked on the Firefox-Android tab strip project to <b>enhance large screen support</b> for our users and worked on Firefox-Android
                    tabs tray refresh to follow <b>Google Material 3</b> guidelines, <b>improve user experience</b>, and increase functionality, by using my
                    knowledge of <b>ViewModel</b>, <b>lifecycle aware components</b>, and <b>accessibility</b>
                </li>
                <li>
                    Worked with design teams and followed <b>Figma</b> prototypes to implement reusable, custom TextField, Dropdown, and
                    Snackbar <b>Android Components</b> for our <b>open source</b> codebase, using <b>Kotlin</b> and <b>Jetpack Compose</b>
                </li>
                <li>
                    <b>Mentored</b> an intern by sharing my knowledge and experience and <b>led</b> their project for Firefox-Android WebCompat Reporter
                    enhancements, to improve the quality of reports and benefit <b>15</b> engineers and our users, indirectly; my responsibilities
                    included <b>project scoping</b>, <b>code reviews</b>, <b>working with UX, Product, and QA teams to prioritize work</b>,
                    and <b>code pairing</b>
                </li>
            </ul>
        )
    }
]
