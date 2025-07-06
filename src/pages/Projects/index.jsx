import PageScaffold from '../../components/PageScaffold';
import ProjectCard from '../../components/ProjectCard';

function Projects() {
    return (
        <PageScaffold pageName="Projects" pageContent={() => (
            <div className="page-layout">
                <div className="card-spacing">
                    <ProjectCard
                        projectName="Personal Website"
                        duration="June 2025 - Present"
                        tags="React, Boostrap, Material UI, CSS"
                        hyperlink={{
                            text: "GitHub repository",
                            link: "https://github.com/nicholaspoon03/nicholaspoon03.github.io/",
                        }}
                        description={() => (
                            <ul>
                                <li>
                                    Used React, Boostrap, Material UI, and CSS to make a scalable personal website, that follows best practices
                                </li>
                            </ul>
                        )}
                    />

                    <ProjectCard
                        projectName="PetPal"
                        duration="Sept. 2023 - Dec. 2023"
                        tags="Django REST Framework, React, CSS, Bootstrap"
                        hyperlink={{
                            text: "GitHub repository",
                            link: "https://github.com/nicholaspoon03/CSC309-Group-Project",
                        }}
                        description={() => (
                            <ul>
                                <li>
                                    Worked in a group of 4 and used Django REST Framework, React, CSS, and Bootstrap to create a pet adoption website
                                </li>
                            </ul>
                        )}
                    />

                    <ProjectCard
                        projectName="AI for Discovery and Self-Driving Labs"
                        duration="May 2023 - Aug. 2023"
                        tags="Python, Flask, SQLAlchemy, HTML, CSS"
                        hyperlink={null}
                        description={() => (
                            <ul>
                                <li>
                                    Created a web application to operate and monitor the full cycle of material discovery in the self-driving lab,
                                    with <b>Python</b>, <b>Flask</b>, <b>SQLAlchemy</b>, <b>HTML</b>, and <b>CSS</b>; it will be used
                                    on <b>$29 million</b> worth of robots and will boost efficiency for <b>10+</b> scientists
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

export default Projects;