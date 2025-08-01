import { Project } from "../models/Project";
import poster from '../assets/ai_for_discovery_and_sdl_poster.pdf';

export const projects: Project[] = [
    {
        name: "Personal Website",
        duration: "June 2025 - Present",
        tags: ["React", "JavaScript", "CSS", "Bootstrap", "Material UI", "GitHub"],
        hyperlinks: [{
            text: "GitHub repository",
            link: "https://github.com/nicholaspoon03/nicholaspoon03.github.io/",
        }],
        description: (
            <ul>
                <li>
                    Used <b>React</b>, <b>JavaScript</b>, <b>CSS</b>, <b>Bootstrap</b>, <b>Material UI</b>, and <b>GitHub</b> to <b>design</b>, <b>build</b>, and <b>deploy</b> a modern, scalable personal
                    website that follows best practices
                </li>
            </ul>
        ),
    },
    {
        name: "PetPal",
        duration: "Sept. 2023 - Dec. 2023",
        tags: ["Django REST Framework", "React", "JavaScript", "CSS", "Bootstrap"],
        hyperlinks: [
            {
                text: "GitHub repository",
                link: "https://github.com/nicholaspoon03/CSC309-Group-Project",
            },
            {
                text: "Website link",
                link: "https://petpal.lance1416.com/",
            }
        ],
        description: (
            <ul>
                <li>
                    Worked in a group of 4 and used <b>Django REST Framework</b>, <b>React</b>, <b>JavaScript</b>, <b>CSS</b>, and <b>Bootstrap</b> to create a simulation pet adoption website
                </li>
                <li>
                    Pet seekers can search for pets to adopt and submit an application to adopt pets of interest.
                </li>
                <li>
                    Pet shelters can make new pet listing postings.
                </li>
                <li>
                    Users can report other users for inappropriate behaviour. An admin user can review these reports and decide whether
                    they want to ban the user or issue them a warning.
                </li>
            </ul>
        ),
    },
    {
        name: "AI for Discovery and Self-Driving Labs",
        duration: "May 2023 - Aug. 2023",
        tags: ["Python", "Flask", "SQLAlchemy", "HTML", "CSS", "Bootstrap"],
        hyperlinks: [
            {
                text: "Project info",
                link: "https://www.matter.toronto.edu/basic-content-page/ai-for-discovery-and-self-driving-labs",
            },
            {
                text: "Referenced research paper 1",
                link: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0229862"
            },
            {
                text: "Referenced research paper 2",
                link: "https://chemrxiv.org/engage/chemrxiv/article-details/64cbe80adfabaf06ffa61204"
            },
            {
                text: "Research fair poster",
                link: poster
            }
        ],
        description: (
            <ul>
                <li>
                    Supervised by Professor Alán Aspuru-Guzik and mentored by Doctor Mohammad Ghazi Vakili, I created a web application to operate and
                    monitor the full cycle of material discovery in the self-driving lab, with <b>Python</b>, <b>Flask</b>, <b>SQLAlchemy</b>, <b>HTML</b>, <b>Bootstrap</b>,
                    and <b>CSS</b>; it will be used on <b>$29 million</b> worth of robots and will boost efficiency for <b>10+</b> scientists
                </li>
                <li>
                    This project aims to <b>automate science experiments</b> by creating <b>'self-driving labs'</b>, with the goal of <b>discovering new molecules</b>, which can be used
                    for finding new potential drugs. It was granted <b>$200 million</b> of funding from the Canadian government, the largest grant that they ever gave to a post secondary institution.
                </li>
            </ul>
        ),
    },
    {
        name: "Breakout",
        duration: "Nov. 2022 - Dec. 2022",
        tags: ["MIPS Assembly", "Mars 4.5 Simulator"],
        hyperlinks: [],
        description: (
            <ul>
                <li>With a partner, we used <b>MIPS Assembly</b> and the <b>Mars 4.5 Simulator</b> to recreate the popular game, Breakout.</li>
            </ul>
        ),
    },
    {
        name: "UofTinder",
        duration: "Sept. 2022 - Dec. 2022",
        tags: ["Java", "Android", "Android Studio", "Firebase", "Android Espresso", "Clean Architecture Model", "SOLID Principles", "MVP model", "Design patterns"],
        hyperlinks: [{
            text: "GitHub repository",
            link: "https://github.com/nicholaspoon03/course-project-group-80"
        }],
        description: (
            <ul>
                <li>
                    In a group of 8, we used <b>Java</b>, <b>Android Studio</b>, and <b>Firebase</b> to create a matchmaking <b>Android app</b>.
                </li>
                <li>
                    Worked on the sorting algorithm, parts of the user interface (UI), and created <b>Android UI tests</b> with <b>Android Espresso</b>
                </li>
                <li>
                    Applied the <b>Clean Architecture Model</b> and <b>SOLID Principles</b> to <b>minimize code smells</b>
                </li>
                <li>
                    Used <b>design patterns</b>, including the <b>Façade</b> and <b>Observer Design Patterns</b> to help with our implementation and
                    to <b>decrease coupling</b> and <b>increase cohesion</b>
                </li>
                <li>
                    Used <b>Model-View-Presenter (MVP) model</b> and <b>interfaces</b> to <b>invert the dependency</b> and allow us
                    to <b>remove the source code dependency while keeping the same control flow</b>
                </li>
            </ul>
        ),
    },
    {
        name: "The Correlation Between Crime Rates and COVID-19 Cases in Canada",
        duration: "Nov. 2021 - Dec. 2021",
        tags: ["Python", "Tkinter", "Pandas", "Numpy", "Matplotlib"],
        hyperlinks: [{
            text: "GitHub repository",
            link: "https://github.com/nicholaspoon03/Covid-Crime-Project",
        }],
        description: (
            <ul>
                <li>
                    In a group of 4, we used <b>Python</b>, <b>Tkinter</b>, <b>Pandas</b>, <b>Numpy</b>, and <b>Matplotlib</b> to <b>analyze</b> and <b>graph</b> the
                    correlation between crime rates and COVID-19 cases in Canada.
                </li>
            </ul>
        ),
    },
    {
        name: "Space Shooter",
        duration: "June 2021 - June 2021",
        tags: ["Python", "Pygame"],
        hyperlinks: [],
        description: (
            <ul>
                <li>
                    Worked in a group of 3 and we used <b>Python</b> and <b>Pygame</b> to create a game
                </li>
                <li>
                    The player is a spaceship and their goal is to destroy enemy spaceships by shooting a projectile towards them, while enemy
                    spaceships are also shooting projectiles toward the user.
                </li>
            </ul>
        ),
    },
    {
        name: "Markbook",
        duration: "May 2021 - May 2021",
        tags: ["Python", "Pytest", "Command line interface"],
        hyperlinks: [],
        description: (
            <ul>
                <li>
                    As a group of 4, we used <b>Python</b>, <b>Pytest</b>, our knowledge of <b>basic data structures</b> such as <b>loops</b>, <b>lists</b>, and <b>dictionaries</b>, <b>functions</b>,
                    and <b>file read & write</b> to create a <b>command line program</b> that would allow a teacher to input student marks for all of their assignments.
                </li>
            </ul>
        ),
    },
    {
        name: "Accounting Helper",
        duration: "May 2020 - June 2020",
        tags: ["Python", "Arcade", "Command line interface"],
        hyperlinks: [{
            "text": "GitHub repository",
            "link": "https://github.com/nicholaspoon03/accounting_helper_cpt"
        }],
        description: (
            <ul>
                <li>
                    With just over 1 year of programming experience, I made my first application on my own, with <b>Python</b> and the <b>Arcade</b> library.
                </li>
                <li>
                    Inspired by my newfound accounting knowledge, I created an accounting app that automatically generates a chart of accounts, trial balance, and income statement with a simple
                    input of assets, liabilities, and owner's equity, through a <b>command line interface (CLI)</b>.
                </li>
            </ul>
        ),
    },
    {
        name: "Plane Game",
        duration: "May 2019 - June 2019",
        tags: ["Python", "Arcade"],
        hyperlinks: [],
        description: (
            <ul>
                <li>
                    In a group of 2, we used <b>Python</b> and the <b>Arcade</b> library to create a side-scrolling game, where the player is a spaceship and the objective is to avoid as many
                    stars as possible and travel the longest distance. Along the way, there are coins that can be collected for powerups.
                </li>
                <li>
                    This is the first application I have ever been a part of creating.
                </li>
            </ul>
        ),
    },
]
