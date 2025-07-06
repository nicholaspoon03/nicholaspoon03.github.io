import Card from "../Card";
import IconText from "../IconText";
import './styles.css';

function ProjectCard({ projectName, duration, tags, hyperlinks, description }) {
    return (
        <Card cardContent={() => (
            <div>
                <IconText
                    iconClassName="bi bi-easel3-fill"
                    textContent={() => (
                        <b className="subheading">{projectName}</b>
                    )}
                />

                <IconText
                    iconClassName="bi bi-calendar-fill"
                    textContent={() => (
                        <p>{duration}</p>
                    )}
                />

                { hyperlinks === null ? "" :
                    hyperlinks.map((hyperlink) => (
                        <IconText
                            key={hyperlink.link}
                            iconClassName="bi bi-link-45deg"
                            textContent={() => (
                                <a id="project-link" href={hyperlink.link} target="_blank" rel="noreferrer noopener">
                                    <p>{hyperlink.text}</p>
                                </a>
                            )}
                        />
                    ))
                }

                { tags === null ? "" :
                    <IconText
                        iconClassName="bi bi-tags"
                        textContent={() => (
                            <p>{tags}</p>
                        )}
                    />
                }

                {description()}
            </div>
        )} />
    )
}

export default ProjectCard;
