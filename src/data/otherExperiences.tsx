import { Experience } from "../models/Experience";

export const otherExperiences: Experience[] = [
    {
        company: "Engineering For Kids York Region",
        positionToDuration: {
            "Lead Teacher": "Sept. 2022 - Aug. 2023",
            "Assistant Teacher": "April 2022 - Aug. 2022"
        },
        location: "Richmond Hill, ON, CAN",
        tags: ["Leadership", "Mentorship", "Close attention to detail"],
        description: (
            <ul>
                <li>
                    Took on a <b>leadership</b> role to teach STEM related lessons, guide students through activities, and assist struggling students with patience,
                    by using my organizational, teamwork, and time management skills
                </li>
                <li>Paid <b>close attention to detail</b> to observe the students in the class</li>
                <li><b>Mentored</b> new employees by sharing my teaching experience and lesson knowledge</li>
            </ul>
        )
    },
    {
        company: "Elections Ontario",
        positionToDuration: {
            "Tabulator Deputy Returning Officer": "June 2022 - June 2022"
        },
        location: "Richmond Hill, ON, CAN",
        tags: ["Quick learning abilities", "Working in fast-paced environment", "Independent"],
        description: (
            <ul>
                <li>Used my <b>quick learning abilities</b> to learn my job responsibilities with only one training session</li>
                <li>
                    Fed the ballots into the tabulator and printed the results at the end of the day, gaining experience working in a fast-paced environment and
                    improving my interpersonal communication skills.
                </li>
                <li>
                    Completed pre-event and post-event logic and accuracy testing on the tabulator, demonstrating my ability to reliably follow instructions and
                    work independently
                </li>
            </ul>
        )
    },
    {
        company: "Self-employed",
        positionToDuration: {
            "Tutor": "Oct. 2021 - June 2022, Mar. 2025 - Present"
        },
        location: "Remote",
        tags: [],
        description: (
            <ul>
                <li>
                    Enhanced my explanation and communication skills by describing concepts in a clear and concise way.
                </li>
                <li>
                    I was able to help one of my students improve their grade 11 math grade by <b>20%</b>.
                </li>
            </ul>
        )
    },
]
